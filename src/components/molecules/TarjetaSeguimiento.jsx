import { Card } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'

const CONFIG_ESTADO = {
  'En preparación': {
    color: 'bg-warning text-dark',
    icono: 'box',
    progreso: '25%',
    colorProgreso: 'bg-warning',
    siguiente: 'En tránsito',
    textoBoton: "Marcar como 'En tránsito'",
  },
  'En tránsito': {
    color: 'bg-primary',
    icono: 'truck-fast',
    progreso: '70%',
    colorProgreso: 'bg-primary',
    siguiente: 'Recibido',
    textoBoton: "Marcar como 'Recibido'",
  },
  Recibido: {
    color: 'bg-success',
    icono: 'check-double',
    progreso: '100%',
    colorProgreso: 'bg-success',
  },
}

export default function TarjetaSeguimiento({ pedido, onAvanzar }) {
  const config = CONFIG_ESTADO[pedido.estado]

  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Header className="bg-white d-flex justify-content-between align-items-center pt-3 pb-2">
        <span className="text-muted fw-bold small">{pedido.idOrden}</span>
        <span className={`badge ${config.color}`}>
          <Icono nombre={config.icono} className="me-1" />
          {pedido.estado}
        </span>
      </Card.Header>
      <Card.Body>
        <h6 className="fw-bold text-primary mb-1">{pedido.proveedor}</h6>
        <p className="mb-1 fw-medium">{pedido.producto}</p>
        <p className="small text-muted mb-3">
          Cantidad solicitada: <strong>{pedido.cantidad} unid.</strong>
        </p>
        <div className="progress mb-2" style={{ height: 8 }}>
          <div
            className={`progress-bar ${config.colorProgreso} progress-bar-striped progress-bar-animated`}
            role="progressbar"
            style={{ width: config.progreso }}
          />
        </div>
        <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.7rem' }}>
          <span>Emisión: {pedido.fechaEmision}</span>
          <span>Destino: Bodega Central</span>
        </div>
        {config.siguiente ? (
          <Boton variant="outline-dark" size="sm" className="w-100 mt-3" onClick={() => onAvanzar(pedido.idOrden, config.siguiente)}>
            <Icono nombre="arrow-right-arrow-left" className="me-1" />
            {config.textoBoton}
          </Boton>
        ) : (
          <div className="alert alert-success m-0 mt-3 p-2 text-center small fw-bold">
            <Icono nombre="lock" className="me-1" />
            Ingresado al stock global
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
