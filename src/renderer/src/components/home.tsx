import { Button, Image, Space } from 'antd'
import { useEffect, useState } from 'react'
import { Content, Header } from 'antd/es/layout/layout'

export default function () {
  const [urls, setUrls]: any = useState([])
  const getAll = async () => {
    await fetch('http://127.0.0.1:8000/api/all')
      .then((r) => r.json())
      .then((list) => {
        setUrls((prevUrls) => [...prevUrls, ...list])
      })
  }
  const check = () => {
    console.log(JSON.parse(urls[0]).url)
    // setCurrent(JSON.parse(urls[0]).url)
  }
  return (
    <div>
      {urls.map((item:{url:string, name:string}) => {
        const {url, name} = item
        return <Image key={name.match(/.+(?=\.)/)![0]} onAuxClick={()=>{
          window.api.downloadImage(url, name)
        }} src={url}></Image>
      })}
      <Button onClick={getAll}>get All</Button>
      <Button onClick={check}>check</Button>
    </div>
  )
}
