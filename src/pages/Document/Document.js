import { Button, Col, DatePicker, Form, Input, Row, Select, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import { BASE_API } from '../../globals/constants'
const { TextArea } = Input
const { Title } = Typography

const Document = () => {
  let { state } = useLocation()
  console.log(state[0])
  const data = [state[0]]

  return (
    <Row justify="center" align="top" style={{ textAlign: 'center' }}>
      <Col xs={{ span: 20 }} xl={{ span: 10 }}>
        <Title>Shiko kontrollin</Title>
        <Form style={{ paddingTop: 20 }} size="large" initialValues={state[0]}>
          <Form.Item label="Studenti">
            <div level={5}>{state[0].name}</div>
          </Form.Item>
          <Form.Item label="Tema" name={'title'}>
            <div>{state[0].title}</div>
          </Form.Item>
          <Form.Item label="Udhëheqësi">
            <div>Prof.Dr. Elinda Mece</div>
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Viti:</label>
            <Form.Item label="Nga">{state[0].from}</Form.Item>
            <Form.Item label="Deri">{state[0].to}</Form.Item>
          </div>
          <Form.Item label="Programi i studimit" name="studyProgram">
            <div>{state[0].studyProgram}</div>
          </Form.Item>
          <Form.Item label="Cikli i studimit" name="type">
            <div>Bachelor</div>
          </Form.Item>
          <Form.Item label="Numri Matrikullimit" name="uniqueNumber">
            PO523A090308{' '}
          </Form.Item>
          <Form.Item label="Dokumenti" name="document">
            <div>{<a href={BASE_API + '/' + state[0].document}>{state[0].originalDocument}</a>}</div>
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
