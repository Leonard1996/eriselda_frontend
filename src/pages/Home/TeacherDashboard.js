import { Col, Menu, Row, Space, Table, Typography } from 'antd'
import { useState } from 'react'
import { controlLabels } from '../../globals/constants'
import './TeacherDashboard.css'
import { useNavigate } from 'react-router-dom'
const { Title } = Typography

const TeacherDashboard = () => {
  const [current, setCurrent] = useState('mail')
  const [file, setFile] = useState({})
  const navigate = useNavigate()

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  const dataSource = [
    {
      key: '1',
      tema: 'MikesbAJHBVDJHLJSBDCS HHUDEBUE HAHHHHAS JDHDHDPP  HJEWHEHE',
      studenti: 'Eriselda Hoxha',
      statusi: '10 Downing Street',
    },
    {
      key: '2',
      tema: 'John',
      studenti: 42,
      statusi: '10 Downing Street',
    },
    {
      key: '2',
      tema: 'John',
      studenti: 42,
      statusi: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Studenti',
      dataIndex: 'studenti',
      key: 'studenti',
    },
    {
      title: 'Tema',
      dataIndex: 'tema',
      key: 'tema',
    },
    {
      title: 'Statusi',
      dataIndex: 'statusi',
      key: 'statusi',
    },
    {
      title: 'Veprime',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => navigate('/home/document')}>Shiko</a>
        </Space>
      ),
    },
  ]
  return (
    <Row justify="center" align="top" style={{ textAlign: 'center' }}>
      <Col xs={{ span: 20 }} xl={{ span: 10 }}>
        <Title level={3}>Kontrollet</Title>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={controlLabels} style={{ fontSize: 20 }} />
        <Table
          className="custom-table"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 10,
          }}
        ></Table>
      </Col>
    </Row>
  )
}
export default TeacherDashboard
