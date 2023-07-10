import { useEffect, useState } from 'react'
import WithLoader from '../../globals/components/WithLoader'
import { homeService } from './home.service'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TeacherDashboard from '../TeacherControl/TeacherDashboard'
import SearchPage from '../Search.js/SearchPage'
import { Avatar, Card, Col, Divider, Layout, Row } from 'antd'
import StudentDashboard from '../StudentControl/StudentDashboard'
import Title from 'antd/es/skeleton/Title'
import { ContainerOutlined, FileSearchOutlined, FileTextOutlined, ScanOutlined, UserOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  let { state } = useLocation()
  const navigate = useNavigate()
  const callLogin = async () => {
    setIsLoading(true)
    const user = await homeService.login(state)
    localStorage.setItem('authData', JSON.stringify(user.data))
    window.history.replaceState({}, document.title)
    setIsLoading(false)
  }
  useEffect(() => {
    if (state) {
      callLogin()
    }
  }, [])
  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgb(27 148 193)',
    height: '200px',
    color: '#fff',
    fontSize: '25px',
  }

  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '25%',
    textAlign: 'center',
    backgroundColor: 'rgb(27 148 193)',
    height: '200px',
    margin: '50px',
    color: '#fff',
    textDecorationLine: 'none',
  }

  return (
    <WithLoader isLoading={isLoading}>
      <div style={{ display: 'block', textAlign: 'center' }}>
        <h1>Sistemi i Menaxhimit te Diplomave</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignContent: 'center', width: '80%', justifyContent: 'center', marginTop: '10rem' }}>
          <Link style={linkStyle} to={JSON.parse(localStorage.getItem('authData'))?.user?.role === 'student' ? '/student_controls' : '/controls'}>
            <Card.Grid style={gridStyle}>
              <ContainerOutlined />
              <span>{JSON.parse(localStorage.getItem('authData'))?.user?.role === 'student' ? 'Ploteso Kontrollet' : 'Shiko kontrollet'} </span>
            </Card.Grid>
          </Link>
          <Link style={linkStyle} to="/search">
            <Card.Grid style={gridStyle}>
              <FileSearchOutlined />
              <span>Kerko diploma</span>
            </Card.Grid>
          </Link>
        </div>
      </div>
      {/* {JSON.parse(localStorage.getItem('authData'))?.user?.role === 'student' ? <StudentDashboard /> : <TeacherDashboard />} */}
    </WithLoader>
  )
}
