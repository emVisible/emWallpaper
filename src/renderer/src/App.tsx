import '@renderer/assets/global.scss'
import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
// import { Navigate,  Routes } from 'react-router'
import Btn from './components/btn'
import Config from './components/config'
import Home from './components/home'
import ErrorPage from './components/error'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
function App(): JSX.Element {
  return (
    <Layout className="h-screen">
      {/* <Header className="bg-[#2d3436] flex justify-center items-center"></Header> */}
      <Content className="overflow-auto min-h-[300px] px-4 py-2">
        <Routes>
          <Route path="/" element={<Navigate to="/home"></Navigate>} />
          <Route path="/home" element={<Home />} />
          <Route path="/config" element={<Config></Config>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Content>
      <Footer className="drag bg-[#2d3436] flex justify-center items-center py-3">
        <Btn />
      </Footer>
    </Layout>
  )
}

export default App
