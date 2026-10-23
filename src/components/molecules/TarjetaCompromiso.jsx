import { Card, Col, Row } from 'react-bootstrap'
import Icono from '../atoms/Icono'

export default function TarjetaCompromiso({ titulo, texto, icono = 'gem' }) {
  return (
    <Card className="bg-white border border-primary shadow-sm p-4 p-md-5 rounded-4">
      <Row className="align-items-center">
        <Col lg={8} className="pe-lg-4">
          <h3 className="fw-bold text-dark mb-3">{titulo}</h3>
          <p className="text-muted fs-5 mb-0">{texto}</p>
        </Col>
        <Col lg={4} className="text-center mt-4 mt-lg-0 ps-lg-4">
          <span style={{ fontSize: '4rem' }}>
            <Icono nombre={icono} className="text-primary" />
          </span>
        </Col>
      </Row>
    </Card>
  )
}
