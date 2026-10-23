import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormNewsletter from '../molecules/FormNewsletter'

const enlaces = [
  { to: '/nosotros', texto: 'Acerca de Nosotros' },
  { to: '/terminos', texto: 'Términos y Condiciones' },
  { to: '/publicar', texto: 'Publica con Nosotros' },
]

export default function PiePagina() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Librería Siamés</h5>
            <p className="text-secondary small">Tu librería de confianza.</p>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled small">
              {enlaces.map(({ to, texto }) => (
                <li key={to} className="mb-2">
                  <Link to={to} className="text-decoration-none text-secondary">{texto}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-secondary small">Recibe ofertas exclusivas y novedades en tu correo.</p>
            <FormNewsletter />
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <p className="text-center text-secondary small mb-0">
          &copy; 2026 Librería Siamés. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  )
}