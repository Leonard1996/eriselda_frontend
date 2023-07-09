import { Button, Form, Select, Upload, Input } from 'antd'
import { useState } from 'react'
import { InboxOutlined, ReadOutlined } from '@ant-design/icons'
const { TextArea } = Input
const { Dragger } = Upload

const ControlForm = ({ setFile, diploma }) => {
  return (
    <Form style={{ paddingTop: 20 }} size="large">
      <Form.Item label="Tema">
        <TextArea />
      </Form.Item>
      <Form.Item label="Udhëheqësi">
        <Select placeholder="Zgjidhni udhëheqësin tuaj te diplomës" style={{}} options={diploma?.teachers.map((teacher) => ({ value: teacher.id, label: teacher.name })) || []}></Select>
      </Form.Item>
      <Form.Item label="Dokumenti">
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
        <Button type="primary" style={{ width: '100%', height: 50 }}>
          Dërgo
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ControlForm
