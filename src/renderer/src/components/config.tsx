import store from '@renderer/redux'
import { saveConfig } from '@renderer/redux/configReducer'
import { Button, Card, Form, Input, notification } from 'antd'
import { useDispatch } from 'react-redux'

export default function () {
  const [api, contextHolder] = notification.useNotification()
  let config = store.getState().configReducer.config.value
  const dispatch = useDispatch()
  const errorMsg = () => {
    api['error']({
      message: 'Error',
      description: 'Something wrong happen...'
    })
  }

  const openSysDir = async () => {
    const res = await window.api.openSystemDirectory()
    if (res) {
      dispatch(saveConfig({ config: { value: res[0] || '' } }))
    } else {
      errorMsg()
    }
  }

  return (
    <>
      <Form name="savePath" onFinishFailed={errorMsg}>
        <Form.Item>
          <Card title="设置图片默认保存路径">
            {config}
            <Input id="ipt" value={config} className="mb-4" />
            <Button
              type="link"
              className="text-white bg-[#1dd1a1] border-r-2 border-r-slate-200"
              style={{ color: 'white' }}
              onClick={openSysDir}
            >
              选择文件夹
            </Button>
          </Card>
        </Form.Item>
      </Form>
    </>
  )
}
