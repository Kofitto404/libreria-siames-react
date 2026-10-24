import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'

export default function PlantillaPanel({ titulo, children }) {
  return (
    <Container className="py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <h2 className="fw-bold mb-0">{titulo}</h2>
        <Boton as={Link} to="/mi-cuenta" size="sm">Volver a mi cuenta</Boton>
      </div>
      {children}
    </Container>
  )
}
