import { Config, StereoNesting } from '@icon-park/react'
import '@renderer/assets/global.scss'
import store from '@renderer/redux'
import { stateChange } from '@renderer/redux/routeReducer'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'

/**
 * 定义路由以及跳转
 * ??? 为什么会一次加载两遍 ?
 */
export default function () {
  const pathname = useLocation().pathname
  return (
    <section className="nodrag">
      {pathname == '/home' ? (
        <Button
          onClick={() => {
            store.dispatch(stateChange({ value: 'config' }))
          }}
          type="link"
          className="flex justify-center items-center border-0"
          shape="circle"
        >
          <Link to="/config">
            <Config theme="outline" size="24" fill="#f5f6fa" />
          </Link>
        </Button>
      ) : pathname == '/config' ? (
        <Button
          onClick={() => {
            store.dispatch(stateChange({ value: 'home' }))
          }}
          className="flex justify-center items-center"
          type="link"
          shape="circle"
        >
          <Link to="/home">
            <StereoNesting theme="outline" size="24" fill="#f5f6fa" />
          </Link>
        </Button>
      ) : (
        <></>
      )}
    </section>
  )
}
