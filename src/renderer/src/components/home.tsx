import { Button, Image, Space } from 'antd'
import { useState } from 'react'

export default function () {
  let urls = []
  const [current, setCurrent] = useState('')
  const getAll = async () => {
    await fetch('http://127.0.0.1:8000/api/all')
      .then((r) => r.json())
      .then((list) => {
        urls = [...urls, ...list] as any
      })
  }
  const check = () => {
    console.log(JSON.parse(urls[0]).url)
    setCurrent(JSON.parse(urls[0]).url)
  }
  return (
    <>
      <Space size={12}>
        <Image width={300} src={current}></Image>
        <Button onClick={getAll}>get All</Button>
        <Button onClick={check}>check</Button>
      </Space>
    </>
  )
}
