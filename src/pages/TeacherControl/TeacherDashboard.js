import { Col, Menu, Row, Space, Table, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { controlLabels } from '../../globals/constants'
import './TeacherDashboard.css'
import { useNavigate } from 'react-router-dom'
import { getDiplomasForTeacher } from './teacher.service'
const { Title } = Typography

const TeacherDashboard = () => {
  const [current, setCurrent] = useState(1)
  const [file, setFile] = useState({})
  const [page, setPage] = useState(1)
  const [data, setData] = useState()
  const navigate = useNavigate()

  const getDiplomasList = async () => {
    console.log('here')
    const response = await getDiplomasForTeacher(page)
    //setPage((prevPage) => page + 1)
    setData(response.data?.students.map((student) => ({ ...student, key: student.id })))
  }

  useEffect(() => {
    getDiplomasList()
  }, [])
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  // const dataSource = [
  //   {
  //     key: '1',
  //     tema: 'MikesbAJHBVDJHLJSBDCS HHUDEBUE HAHHHHAS JDHDHDPP  HJEWHEHE',
  //     studenti: 'Eriselda Hoxha',
  //     statusi: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     tema: 'John',
  //     studenti: 42,
  //     statusi: '10 Downing Street',
  //   },
  //   {
  //     key: '3',
  //     tema: 'John',
  //     studenti: 42,
  //     statusi: '10 Downing Street',
  //   },
  // ]

  const columns = [
    {
      title: 'Studenti',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tema',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Statusi',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Veprime',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => navigate('/controls/document')}>Shiko</a>
        </Space>
      ),
    },
  ]
  return (
    <Row justify="center" align="top" style={{ textAlign: 'center' }}>
      <Col xs={{ span: 20 }} xl={{ span: 10 }}>
        <Title level={3}>Kontrollet</Title>
        <Menu onClick={onClick} defaultActiveFirst={1} selectedKeys={[current]} mode="horizontal" items={controlLabels} style={{ fontSize: 20 }} />
        <Table
          className="custom-table"
          dataSource={data}
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
