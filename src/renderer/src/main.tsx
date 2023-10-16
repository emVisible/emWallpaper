import { ConfigProvider, ThemeConfig } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import App from './App'
import config from './components/config'
import ErrorPage from './components/error'
import home from './components/home'
import { store } from './redux'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" Component={App}>
      <Route path="home" Component={home} />
      <Route path="config" Component={config} />
      <Route path="*" Component={ErrorPage} />
    </Route>
  )
)
const antdConfig: ThemeConfig = {
  components: {
    Button: {
      linkHoverBg: '#58B19F'
    }
  }
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={antdConfig}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)
