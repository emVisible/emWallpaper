import store from '@renderer/redux'
import { Card, Col, Image, Row } from 'antd'
import { useEffect, useState } from 'react'
import { PromisePool } from '@supercharge/promise-pool'

export default function () {
  const [urls, setUrls]: any = useState([])
  const configPath = store.getState().configReducer.config.value

  useEffect(() => {
    let ignore = false
    async function getAll() {
      const res = await fetch('http://127.0.0.1:8000/api/all').then((r) => r.json())
      if (ignore == true) {
        await PromisePool.withConcurrency(1)
          .for(res)
          .withTaskTimeout(5)
          .process(async (url, index, pool) => {
            // console.log('url',url)pool
            setUrls((prevUrls) => [...prevUrls, url])
          })
      }
    }
    getAll()
    return () => {
      ignore = true
    }
  }, [])
  return (
    <div>
      <Row>
        <Image.PreviewGroup>
          {urls.map((item: { url: string; name: string }) => {
            const { url, name } = item
            return (
              <Col span={8} key={name.match(/.+(?=\.)/)![0]}>
                <Card size="small">
                  <Image
                    onAuxClick={() => {
                      window.api.downloadImage(url, name, configPath)
                    }}
                    src={url}
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
