import { Card, Col, Row } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'

export default function TarjetaSolicitud({ solicitud, onMarcarContactado }) {
  const { id, fecha, contacto, especificaciones, archivos, estado } = solicitud
  const pendiente = estado === 'Pendiente'

  return (
    <Card className={`shadow-sm border-0 border-start border-4 ${pendiente ? 'border-warning' : 'border-success'} mb-4`}>
      <Card.Header className="bg-white d-flex justify-content-between align-items-center pt-3 pb-2">
        <span className="text-muted fw-bold">
          Solicitud #{id} <span className="ms-2 fw-normal small">({fecha})</span>
        </span>
        <span className={`badge ${pendiente ? 'bg-warning text-dark' : 'bg-success'} px-3 py-2`}>
          <Icono nombre={pendiente ? 'clock' : 'check-double'} className="me-1" />
          {estado}
        </span>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          <Col md={4}>
            <h6 className="fw-bold text-primary border-bottom pb-2 mb-3">
              <Icono nombre="address-card" className="me-2" />1. Info. de contacto
            </h6>
            <p className="mb-1"><strong>Autor:</strong> {contacto.nombres}</p>
            <p className="mb-1"><strong>Teléfono:</strong> {contacto.telefono}</p>
            <p className="mb-0">
              <strong>Correo:</strong>{' '}
              <a href={`mailto:${contacto.correo}`} className="text-decoration-none">{contacto.correo}</a>
            </p>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold text-primary border-bottom pb-2 mb-3">
              <Icono nombre="print" className="me-2" />2. Especificaciones
            </h6>
            <p className="mb-1 fw-bold">📖 {especificaciones.libro}</p>
            <ul className="small text-muted mb-0 ps-3">
              <li><strong>Tapa:</strong> {especificaciones.tapa}</li>
              <li><strong>Papel:</strong> {especificaciones.papel}</li>
              <li><strong>Color:</strong> {especificaciones.color}</li>
              <li><strong>Tamaño:</strong> {especificaciones.tamano}</li>
              <li><strong>Ejemplares:</strong> {especificaciones.ejemplares}</li>
              <li><strong>Páginas por ejemplar:</strong> {especificaciones.paginas}</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold text-primary border-bottom pb-2 mb-3">
              <Icono nombre="folder-open" className="me-2" />3. Archivos y observaciones
            </h6>
            <div className="bg-light p-2 rounded mb-2">
              <a href={`/${archivos.nombrePdf}`} target="_blank" rel="noreferrer" className="text-danger small fw-bold text-truncate d-block">
                <Icono nombre="file-pdf" className="me-2" />
                {archivos.nombrePdf}
              </a>
            </div>
            <p className="small text-secondary fst-italic bg-light p-2 rounded mb-0">
              “{archivos.observaciones}”
            </p>
            {pendiente ? (
              <Boton variant="outline-success" size="sm" className="w-100 fw-bold mt-3" onClick={() => onMarcarContactado(id)}>
                <Icono nombre="envelope-circle-check" className="me-2" />
                Marcar como contactado
              </Boton>
            ) : (
              <div className="alert alert-success mt-3 mb-0 p-2 text-center small fw-bold">
                Cotización enviada al cliente
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
