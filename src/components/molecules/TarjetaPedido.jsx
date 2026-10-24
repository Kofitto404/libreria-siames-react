import { Card, Col, Row } from 'react-bootstrap'
import Icono from '../atoms/Icono'

const CONFIG_ESTADO = {
  Entregado: { color: 'bg-success', borde: 'border-success', icono: 'circle-check' },
  'En pedido': { color: 'bg-primary', borde: 'border-primary', icono: 'truck-fast' },
  Solicitado: { color: 'bg-warning text-dark', borde: 'border-warning', icono: 'clock' },
  Cancelado: { color: 'bg-danger', borde: 'border-danger', icono: 'circle-xmark' },
}

export default function TarjetaPedido({ pedido }) {
  const config = CONFIG_ESTADO[pedido.estado] ?? { color: 'bg-secondary', borde: 'border-secondary', icono: 'circle-info' }

  return (
    <Card className={`shadow-sm border-0 border-start border-4 ${config.borde} mb-4`}>
      <Card.Header className="bg-white d-flex justify-content-between align-items-center pt-3 pb-2">
        <h6 className="fw-bold mb-0 text-muted">Pedido #{pedido.id}</h6>
        <span className={`badge ${config.color} px-3 py-2`}>
          <Icono nombre={config.icono} className="me-1" />
          {pedido.estado}
        </span>
      </Card.Header>
      <Card.Body>
        <Row className="align-items-center">
          <Col md={5} className="mb-3 mb-md-0">
            <p className="small text-muted mb-1">
              <Icono nombre="calendar" className="me-1" />
              Fecha de solicitud: {pedido.fecha}
            </p>
            <ul className="mb-0 ps-3">
              {pedido.items.map((item) => (
                <li key={item.nombre}>
                  {item.nombre} <span className="text-muted fw-bold">x{item.cantidad}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={7} className="border-start-md ps-md-4">
            <p className="mb-0 text-secondary fw-medium">
              <Icono nombre="comment-dots" className="me-2 text-muted" />
              {pedido.detalle}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
