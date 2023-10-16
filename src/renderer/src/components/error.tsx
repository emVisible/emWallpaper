import { Alert, Divider, Layout, Progress, Space } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as any
  const [seconds, setSeconds] = useState(3)
  const [percentage, setPercentage] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        const newSeconds = seconds - 1
        const newPercentage = ((3 - newSeconds) * 100) / 3
        setSeconds(newSeconds)
        setPercentage(newPercentage)
      } else {
        clearInterval(interval)
        navigate("/home")
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [seconds])
  return (
    <Layout className="py-10 flex justify-center items-center h-screen">
      <Header className="flex justify-center items-center bg-[#f5f6fa]">
        <Space direction="vertical">
          <h1 className="font-bold; text-xl">Sorry, an unexpected error has occurred.</h1>
          <Divider />
        </Space>
      </Header>
      <Content className="bg-[#f5f6fa]">
        <Space direction="vertical" align="center" className="flex">
          <Alert
            className="px-12 bg-transparent border-none"
            message="404 Not Found"
            description={'Page Will jump in ' + seconds + 's'}
            type="error"
            showIcon
          />
          <Progress className="w-[200px]" percent={percentage} showInfo={false} />
        </Space>
        <p>
          <i>{error}</i>
        </p>
      </Content>
    </Layout>
  )
}
