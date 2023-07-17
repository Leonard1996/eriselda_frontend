import { Button, Col, DatePicker, Form, Row, Select } from 'antd'
import Title from 'antd/es/skeleton/Title'

const Config = () => {
  const { Option } = Select
  return (
    <div>
      <Row justify="center" align="top" style={{ textAlign: 'center' }}>
        <Col xs={{ span: 20 }} xl={{ span: 10 }}>
          <h1>Menaxho Hapjen e kontrolleve </h1>
          <Form.Item label="Cikli i Studimit" name={'kontrolli'}>
            <Select placeholder="Zgjidhni Ciklin e Studimit">
              <Option value={'Bachelor'}></Option>
              <Option value={'Kontrolli II'}></Option>
              <Option value={'Kontrolli III'}></Option>
            </Select>
          </Form.Item>
          <Form.Item label="Programi i Studimit" name={'kontrolli'}>
            <Select placeholder="Zgjidhni Programin e Studimit">
              <Option value={'Inxhinieri Informatike'}></Option>
              <Option value={'Kontrolli II'}></Option>
              <Option value={'Kontrolli III'}></Option>
            </Select>
          </Form.Item>
          <Form style={{ paddingTop: 20 }} size="large"></Form>
          <Form.Item label="Kontrolli" name={'kontrolli'}>
            <Select placeholder="Zgjidhni Kontrollin">
              <Option value={'Kontrolli I'}></Option>
              <Option value={'Kontrolli II'}></Option>
              <Option value={'Kontrolli III'}></Option>
            </Select>
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label></label>
            <Form.Item label="Nga">
              <DatePicker name="from" />
            </Form.Item>
            <Form.Item label="Deri">
              <DatePicker name="to" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: 50 }}>
              Fillo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}

export default Config
