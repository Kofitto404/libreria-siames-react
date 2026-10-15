import { Col, Container, Row } from 'react-bootstrap'
import FormNewsletter from '../molecules/FormNewsletter'

export default function PiePagina({ onNavegar, onToast }) {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Mi Librería</h5>
            <p className="text-secondary small">Plantilla de ejemplo.</p>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a role="button" className="text-decoration-none text-secondary" onClick={() => onNavegar('/')}>Home</a></li>
              <li className="mb-2"><a role="button" className="text-decoration-none text-secondary" onClick={() => onNavegar('/inicio')}>Inicio</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-secondary small">Recibe ofertas exclusivas y novedades.</p>
            <FormNewsletter onSuscribir={() => onToast('¡Suscrito!')} />
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <p className="text-center text-secondary small mb-0">&copy; 2026 Mi Librería. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
