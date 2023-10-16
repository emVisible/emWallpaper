import { Button, Image, Space } from 'antd'
import { useEffect, useState } from 'react'
import { Content, Header } from 'antd/es/layout/layout'

export default function () {
  const [urls, setUrls]: any = useState([])
  const getAll = async () => {
    await fetch('http://127.0.0.1:8000/api/all')
      .then((r) => r.json())
      .then((r) => r.map((item) => JSON.parse(item)))
      .then((list) => {
        setUrls((prevUrls) => [...prevUrls, ...list])
      })
  }
  useEffect(() => {
    console.log('urls', urls)
    console.log(urls[0])
    console.log(urls[1])
    console.log(urls[1])
  }, [urls])
  const check = () => {
    console.log(JSON.parse(urls[0]).url)
    // setCurrent(JSON.parse(urls[0]).url)
  }
  return (
    <div>
      {urls.map((item) => {
        return <Image src={item['url']}></Image>
      })}
      <Button onClick={getAll}>get All</Button>
      <Button onClick={check}>check</Button>
    </div>
  )
}
