import '@renderer/assets/global.scss'
import { store } from '@renderer/redux'
import { ConfigProvider, ThemeConfig } from 'antd'
import { Provider } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router'
import Btn from './components/btn'
import config from './components/config'
import home from './components/home'
function App(): JSX.Element {
  const { pathname } = useLocation()
  const antdConfig: ThemeConfig = {
    components: {
      Button: {
        linkHoverBg: '#58B19F'
      }
    }
  }

  return (
    <>
      <Provider store={store}>
        <ConfigProvider theme={antdConfig}>
          <Btn path={pathname} />
          <Routes>
            <Route path="home" Component={home} />
            <Route path="config" Component={config} />
          </Routes>
        </ConfigProvider>
      </Provider>
    </>
  )
}

export default App
