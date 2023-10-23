import { FolderOpen } from '@icon-park/react'
import store from '@renderer/redux'
import { Button } from 'antd'

export default function () {
  const configPath = store.getState().configReducer.config.value

  return (
    <section className="nodrag">
      <Button
        onClick={() => {
          console.log('configPath',configPath)
          window.api.openSaveDirectory(configPath)
        }}
        type="link"
        className="flex justify-center items-center border-0 py-0"
        shape="circle"
      >
        <FolderOpen theme="outline" size="24" fill="#f5f6fa" />
      </Button>
    </section>
  )
}
