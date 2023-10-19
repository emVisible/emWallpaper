import { Button, Card, Form, Input, Space, notification } from 'antd'
import { useState } from 'react'

export default function () {
  const [api, contextHolder] = notification.useNotification()
  const [path, setPath] = useState('')
  const errorMsg = () => {
    api['error']({
      message: 'Error',
      description: 'Something wrong happen...'
    })
  }
  const savePath = async () => {

    // const res = await window.api.openSystemDirectory()
  }
  const openSysDir = async () => {
    const res = await window.api.openSystemDirectory()
    if (res) {
      setPath(res)
    }else {
      errorMsg()
    }
  }
  return (
    <>
      <Form name="savePath" onFinish={savePath} onFinishFailed={errorMsg}>
        <Form.Item>
          <Card title="设置图片默认保存路径">
              <Input id='ipt' value={path} className='mb-4'/>
              <Button
                type="link"
                className="text-white bg-[#1dd1a1] border-r-2 border-r-slate-200"
                style={{ color: 'white' }}
                onClick={openSysDir}
              >
                选择文件夹
              </Button>
              <Button
                type="link"
                htmlType="submit"
                className="text-white bg-[#1dd1a1] "
                style={{ color: 'white' }}
              >
                保存
              </Button>
          </Card>
        </Form.Item>
      </Form>
    </>
  )
}
