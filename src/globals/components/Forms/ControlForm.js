import { Button, Form, Select, Upload, Input, DatePicker, notification } from 'antd'
import { InboxOutlined, SmileOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { createDiploma } from '../../../pages/Home/home.service'

const { TextArea } = Input
const { Dragger } = Upload
const { Option } = Select

const ControlForm = ({ setFile, diploma, current, createDiploma, disabled }) => {
  const [selectedItem, setSelectedItem] = useState({})
  const [period, setPeriod] = useState()
  const formData = new FormData()

  const submitHandler = async (data) => {
    data.file = data.file?.fileList[0]
    data.rank = current
    data.form = period?.from
    data.to = period?.to
    console.log(data)
    for (const key in data) {
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
  console.log(period)

  return (
    <>
      <Form style={{ paddingTop: 20 }} size="large" onFinish={submitHandler} disabled={disabled}>
        <Form.Item label="Tema" name="title">
          <TextArea />
        </Form.Item>
        <Form.Item label="Udhëheqësi" name={'teacherId'}>
          <Select mode="" value={selectedItem} defaultValue={selectedItem} onSelect={(option) => setSelectedItem(option)} placeholder="Zgjidhni udhëheqësin tuaj te diplomës">
            {diploma?.teachers?.map((teacher) => (
              <Option key={teacher.teacherId} value={teacher.teacherId}>
                {teacher.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Viti:</label>
          <Form.Item label="Nga">
            <DatePicker picker="year" name="from" onChange={(e) => handleData(e?.$y, 'from')} />
          </Form.Item>
          <Form.Item label="From">
            <DatePicker picker="year" name="to" onChange={(e) => handleData(e?.$y, 'to')} />
          </Form.Item>
        </div>
        <Form.Item label="Numri Matrikullimit" name="uniqueNumber">
          <Input />
        </Form.Item>
        <Form.Item label="Dokumenti" name="file">
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
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', height: 50 }}>
            Dërgo
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ControlForm
