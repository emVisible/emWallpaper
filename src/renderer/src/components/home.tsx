import store from '@renderer/redux'
import { Card, Col, Image, Row } from 'antd'
import { useEffect, useState } from 'react'

export default function () {
  const [urls, setUrls]: any = useState([])
  const configPath = store.getState().configReducer.config.value
  const concurrencyRequest = (urls, maxNum) => {
    return new Promise((resolve) => {
      if (urls.length == 0) {
        return
      }
      let index = 0
      let count = 0
      async function request() {
        if (index == urls.length) {
          return
        }
        const url = urls[index]
        index++
        console.log(url)
        try {
          setTimeout(() => {
            setUrls((prev) => [...prev, url])
          }, 600 * index)
        } catch (err) {
          console.log('err', err)
        } finally {
          count++
          if (count == urls.length) {
            resolve('tasks done')
          }
          request()
        }
      }
      const times = Math.min(maxNum, urls.length)
      for (let i = 0; i < times; i++) {
        request()
      }
    })
  }
  useEffect(() => {
    let ignore = false
    async function getAll() {
      const res = await fetch('http://127.0.0.1:8000/api/all').then((r) => r.json())
      if (ignore == true) {
        concurrencyRequest(res, 1)
      }
    }
    getAll()
    return () => {
      ignore = true
    }
  }, [])
  return (
    <div>
      <Row gutter={[8, 8]} className="my-2">
        <Image.PreviewGroup>
          {urls.map((item: { url: string; name: string }) => {
            const { url, name } = item
            return (
              <Col span={8} key={name.match(/.+(?=\.)/)![0]}>
                <Card
                  size="small"
                  className="h-[300px] overflow-hidden flex justify-center items-center"
                >
                  <Image
                    className="w-full h-full"
                    onAuxClick={() => {
                      window.api.downloadImage(url, name, configPath)
                    }}
                    src={url}
                    fallback="src/assets/failed.png"
                  ></Image>
                </Card>
              </Col>
            )
          })}
        </Image.PreviewGroup>
      </Row>
    </div>
  )
}
