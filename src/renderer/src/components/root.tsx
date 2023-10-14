import { Config, StereoNesting, Tips } from '@icon-park/react'
import '@renderer/assets/global.scss'
import { Button } from 'antd'
import { BrowserRouter, Link, useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@renderer/redux/hooks'
import { stateChange } from '@renderer/redux/routeReducer'
import ErrorPage from './error'

/**
 * 定义路由以及跳转
 * ??? 为什么会一次加载两遍 ?
 */
export default function () {
  const { pathname } = useLocation()
  console.log('location', location)
  const routeState = useAppSelector((state) => state.route.value)
  const dispatch = useAppDispatch()
  // console.log()
  // dispatch(stateChange({ value: pathname.split('/')[1] }))
  
  return (
    <>
      {<br />}
      {'routeState: ' + routeState}
      {pathname == '/home' ? (
        <Button
          onClick={() => {
            dispatch(stateChange({ value: 'config' }))
          }}
          type={'link'}
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
            dispatch(stateChange({ value: 'home' }))
          }}
          className="flex justify-center items-center"
          type={'link'}
          shape="circle"
        >
          <Link to="/home">
            <StereoNesting theme="outline" size="24" fill="#f5f6fa" />
          </Link>
        </Button>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}
