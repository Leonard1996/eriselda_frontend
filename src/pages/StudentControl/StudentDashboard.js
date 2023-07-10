import { Button, Col, Form, Input, Menu, Row, Select, Upload, message, notification } from 'antd'
import { useEffect, useState } from 'react'
import { ContainerOutlined, InboxOutlined, ReadOutlined } from '@ant-design/icons'
import PrivateLayout from '../../layouts/PrivateLayout'
import Title from 'antd/es/typography/Title'
import ControlForm from '../../globals/components/Forms/ControlForm'
import { controlLabels } from '../../globals/constants'
import { createDiploma, getDiploma, homeService } from '../Home/home.service'

const StudentDashboard = () => {
  const [current, setCurrent] = useState(1)
  const [file, setFile] = useState({})
  const [diploma, setDiploma] = useState()
  const [control, setControl] = useState()

  const getInfo = async () => {
    const response = await homeService.getDiploma(current)
    setDiploma(response?.data)
    setControl(response?.data?.diploma?.control)
  }
  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type) => {
    console.log(type)
    api[type]({
      message: 'Sukses!',
      description: 'Kontrolli u dorëzua me sukses!',
    })
  }
  useEffect(() => {
    getInfo()
  }, [current])

  const onClick = (e) => {
    setCurrent(e.key)
  }
  const createDiplomaHadler = async (formData) => {
    openNotificationWithIcon('success')
    const result = await createDiploma(formData)
    console.log(result)
  }

  return (
    <>
      <Row justify="center" align="top" style={{ textAlign: 'center' }}>
        <Col xs={{ span: 20 }} xl={{ span: 10 }}>
          {contextHolder}
          <Title level={3}>Plotësoni kontrollin</Title>
          <Menu onClick={onClick} defaultActiveFirst={1} selectedKeys={current} mode="horizontal" items={controlLabels} style={{ fontSize: 20 }} />
          <ControlForm
            setFile={setFile}
            file={file}
            diploma={diploma}
            current={current}
            control={control}
            disabled={diploma?.status === 'Mbyllur' || diploma?.status === 'Ne pritje' || diploma?.status === 'Pranuar'}
            createDiploma={createDiplomaHadler}
          />
        </Col>
      </Row>
    </>
  )
}

export default StudentDashboard
