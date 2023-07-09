import { Button, Col, DatePicker, Form, Input, Row, Select, Typography } from 'antd'
import { Footer } from 'antd/es/layout/layout'
const { Title } = Typography
const { TextArea } = Input

const SearchPage = () => {
  return (
    <Row justify="center" align="top" style={{ textAlign: 'center' }}>
      <Col xs={{ span: 20 }} xl={{ span: 10 }}>
        <Title level={2}>Kërko diploma ndër vite</Title>
        <Form style={{ paddingTop: 20 }} size="large">
          <Form.Item label="Tema">
            <TextArea />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Viti:</label>
            <Form.Item label="Nga">
              <DatePicker picker="year" />
            </Form.Item>
            <Form.Item label="Deri">
              <DatePicker picker="year" />
            </Form.Item>
          </div>
          <Form.Item label="Udhëheqësi">
            <Select placeholder="Zgjidhni udhëheqësin e diplomës" style={{}}></Select>
          </Form.Item>
          <Form.Item label="Kontrolli">
            <Select placeholder="Zgjidhni Kontrollin" style={{}}></Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ width: '100%', height: 50 }}>
              Kërko
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
export default SearchPage
