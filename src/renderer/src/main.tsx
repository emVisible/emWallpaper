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
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './redux'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" Component={App}>
      <Route path="home" Component={home} />
      <Route path="config" Component={config} />
      <Route path="*" Component={ErrorPage} />
    </Route>
  )
)
const persistor = persistStore(store)
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
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)
