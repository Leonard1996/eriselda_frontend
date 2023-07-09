import React from 'react'
import { Layout, Avatar, Typography } from 'antd'
import { LogoutOutlined, ArrowLeftOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout
const { Title } = Typography

export const PrivateLayout = ({ children }) => {
  //   const location = useLocation()
  //   const navigate = useNavigate()
  //   const logOutHandler = () => {
  //     navigate('/')
  //     logOut()
  //   }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Header style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}></Header> */}
      <Content style={{ height: '100%', marginLeft: 40, marginRight: 40 }}>{children}</Content>
      {/* <Footer></Footer> */}
    </Layout>
  )
}

export default PrivateLayout
