import { Button, Form, Select, Upload, Input, DatePicker, notification } from 'antd'
import { InboxOutlined, SmileOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { createDiploma } from '../../../pages/Home/home.service'
import { BASE_API } from '../../constants'
const dayjs = require('dayjs')

const { TextArea } = Input
const { Dragger } = Upload
const { Option } = Select

const ControlForm = ({ setFile, diploma, current, createDiploma, disabled, control, file }) => {
  console.log(control)
  const [selectedItem, setSelectedItem] = useState({})
  const [period, setPeriod] = useState()
  const formData = new FormData()

  const submitHandler = async (data) => {
    console.log(data.document)
    data.document = data.document?.file ?? file
    data.rank = +current + 1
    data.from = '2000'
    data.to = period?.to
    data.diplomaId = diploma.diploma.diplomaId ?? null
    data.studentId = diploma.student?.id ?? null

    for (const key in data) {
      if (!data[key]) continue
      formData.append(key, data[key])
    }
    createDiploma(formData)
  }
  const handleData = (value, type) => {
    setPeriod((prevState) => ({
      ...prevState,
      [type]: value,
    }))
  }

  return (
    <>
      {control && (
        <Form style={{ paddingTop: 20 }} size="large" onFinish={submitHandler} disabled={disabled} initialValues={control}>
          <Form.Item label="Tema" name="title">
            <TextArea />
          </Form.Item>
          <Form.Item label="Udhëheqësi" name={'teacherId'}>
            <Select mode="" value={selectedItem} onSelect={(option) => setSelectedItem(option)} placeholder="Zgjidhni udhëheqësin tuaj te diplomës">
              {diploma?.teachers?.map((teacher) => (
                <Option key={teacher.teacherId} value={teacher.teacherId}>
                  {teacher.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Viti i studimit:</label>
            <Form.Item label="Nga">
              <DatePicker picker="year" name="from" onChange={(e) => handleData(e?.$y, 'from')} />
            </Form.Item>
            <Form.Item label="From">
              <DatePicker picker="year" name="to" onChange={(e) => handleData(e?.$y, 'to')} />
            </Form.Item>
          </div>
          <Form.Item label="Programi i studimit" name="studyProgram">
            <Input />
          </Form.Item>
          <Form.Item label="Cikli i studimit" name="type">
            <Input />
          </Form.Item>
          <Form.Item label="Numri Matrikullimit" name="uniqueNumber">
            <Input />
          </Form.Item>
          <Form.Item label="Dokumenti" name="document">
            <Dragger
              maxCount={1}
              accept=".pdf, .doc"
              beforeUpload={(file) => {
                setFile(file)
                return false
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Kliko për të ngarkuar dokumentin</p>
            </Dragger>
            <div>{control.document && !file && <a href={BASE_API + '/' + control.document}>{control.originalDocument}</a>}</div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: 50 }}>
              Dërgo
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  )
}

export default ControlForm
