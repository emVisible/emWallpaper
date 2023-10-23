import { FullScreen, OffScreen } from '@icon-park/react'
import { Button } from 'antd'
import { useState } from 'react'

export default function () {
  const [full, setFull] = useState(false)
  return (
    <section className="nodrag">
      <Button
        onClick={() => {
          window.api.fullScreen()
          setFull(!full)
        }}
        type="link"
        className="flex justify-center items-center border-0"
        shape="circle"
      >
        {full ? (
          <OffScreen theme="outline" size="24" fill="#f5f6fa" />
        ) : (
          <FullScreen theme="outline" size="24" fill="#f5f6fa" />
        )}
      </Button>
    </section>
  )
}
