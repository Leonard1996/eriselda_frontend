import { Button, Col, Form, Input, Menu, Row, Select, Upload } from 'antd'
import { useState } from 'react'
import { ContainerOutlined, InboxOutlined, ReadOutlined } from '@ant-design/icons'
import PrivateLayout from '../../layouts/PrivateLayout'
import Title from 'antd/es/typography/Title'
import ControlForm from '../../globals/components/Forms/ControlForm'
import { controlLabels } from '../../globals/constants'

const StudentDashboard = () => {
  const [current, setCurrent] = useState('mail')
  const [file, setFile] = useState({})

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <Row justify="center" align="top" style={{ textAlign: 'center' }}>
        <Col xs={{ span: 20 }} xl={{ span: 10 }}>
          <Title level={3}>Plotësoni kontrollin</Title>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={controlLabels} style={{ fontSize: 20 }} />
          <ControlForm setFile={setFile} />
        </Col>
      </Row>
    </>
  )
}

export default StudentDashboard
