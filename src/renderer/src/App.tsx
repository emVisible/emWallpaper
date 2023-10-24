import '@renderer/assets/global.scss'
import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import Config from './components/config'
import ErrorPage from './components/error'
import FullScreenBtn from './components/fullScreenBtn'
import Home from './components/home'
import Btn from './components/routeBtn'
import SaveDirBtn from './components/saveDirBtn'
function App(): JSX.Element {
  return (
    <Layout className="h-screen">
      <Content className="overflow-auto min-h-[300px] px-4 py-2">
        <Routes>
          <Route path="/" element={<Navigate to="/home"></Navigate>} />
          <Route path="/home" element={<Home />} />
          <Route path="/config" element={<Config></Config>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Content>
      <Footer className="drag bg-[#2d3436] flex justify-center items-center py-3 gap-5">
        <SaveDirBtn />
        <Btn />
        <FullScreenBtn />
      </Footer>
    </Layout>
  )
}

export default App
