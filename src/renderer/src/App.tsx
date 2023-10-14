import '@renderer/assets/global.scss'
import { store } from '@renderer/redux'
import { ConfigProvider, ThemeConfig } from 'antd'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import config from './components/config'
import home from './components/home'
import Root from './components/root'
function App(): JSX.Element {
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/home" Component={home} />
              <Route path="/config" Component={config} />
            </Routes>
            <Root />
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </>
  )
}

export default App
