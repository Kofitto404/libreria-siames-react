import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'

export default function PanelRol({ icono, titulo, texto, enlaces }) {
  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Body className="p-4">
        <h5 className="fw-bold text-dark">
          <Icono nombre={icono} className="me-2 text-primary" />
          {titulo}
        </h5>
        <p className="mb-3 text-dark">{texto}</p>
        <div className="d-grid gap-2">
          {enlaces.map((enlace) => (
            <Boton key={enlace.to} as={Link} to={enlace.to} variant="outline-primary" size="sm">
              {enlace.texto}
            </Boton>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}
