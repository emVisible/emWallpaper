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
      <Content className="flex justify-center items-center overflow-scroll min-h-[300px]">
          <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>} />
            <Route path="/home" element={<Home />} />
            <Route path="/config" element={<Config></Config>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Content>
      <Footer className="bg-[#2d3436] flex justify-center items-center">
        <Btn />
      </Footer>
    </Layout>
  )
}

export default App
