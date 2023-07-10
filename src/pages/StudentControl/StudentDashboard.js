import { Button, Col, Form, Input, Menu, Row, Select, Upload, message, notification } from 'antd'
import { useEffect, useState } from 'react'
import { ContainerOutlined, InboxOutlined, ReadOutlined } from '@ant-design/icons'
import PrivateLayout from '../../layouts/PrivateLayout'
import Title from 'antd/es/typography/Title'
import ControlForm from '../../globals/components/Forms/ControlForm'
import { controlLabels } from '../../globals/constants'
import { createDiploma, getDiploma, homeService } from '../Home/home.service'
import dayjs from 'dayjs'

const StudentDashboard = () => {
  const [current, setCurrent] = useState(0)
  const [file, setFile] = useState()
  const [diploma, setDiploma] = useState()
  const [control, setControl] = useState()

  const getInfo = async () => {
    const response = await homeService.getDiploma(+current + 1)

    setDiploma(response?.data)
    if (response?.data?.diploma) {
      setControl({
        ...response?.data.control,
        from: dayjs().year(response?.data.control.from),
        to: dayjs().year(response?.data.control.to),
        teacherId: {
          value: response?.data?.control?.teacher?.id,
          label: response?.data?.control?.teacher?.name,
        },
        uniqueNumber: response?.data?.control?.student?.uniqueNumber,
      })
    }
  }
  const [api, contextHolder] = notification.useNotification(current)
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
    console.log(e.key, '----------------')
    setCurrent(e.key)
  }
  const createDiplomaHandler = async (formData) => {
    const result = await createDiploma(formData)
    if (result.request?.status == 200) {
      openNotificationWithIcon('success')
    }
    getInfo()
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
            disabled={control?.status === 'Mbyllur' || control?.status === 'Ne pritje' || control?.status === 'Pranuar'}
            createDiploma={createDiplomaHandler}
          />
        </Col>
      </Row>
    </>
  )
}

export default StudentDashboard
