import { Button, Col, Form, Input, Row, Select, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
const { TextArea } = Input
const { Title } = Typography

const Document = () => {
  let { state } = useLocation()
  console.log(state)
  return (
    <Row justify="center" align="top" style={{ textAlign: 'center' }}>
      <Col xs={{ span: 20 }} xl={{ span: 10 }}>
        <Form style={{ paddingTop: 20 }} size="large">
          <Form.Item label="Studenti">
            <div level={5}>Eriselda Hoxha</div>
          </Form.Item>
          <Form.Item label="Tema">
            <div>TEMA E diplomësNFHBRE HJBDSSHADHJBEH DEWDHUWHEUEH HDUHEUE</div>
          </Form.Item>
          <Form.Item label="Udhëheqësi">
            <Select></Select>
          </Form.Item>
          <Form.Item label="Shkaroko dokumentin">
            <div>PDF</div>
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button type="primary" style={{ width: '45%', height: 50 }}>
                Aprovo
              </Button>
              <Button type="default" style={{ width: '45%', height: 50 }}>
                Refuzo
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
export default Document
