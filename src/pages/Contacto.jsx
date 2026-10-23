import { Card, Col, Container, Row } from 'react-bootstrap'
import Imagen from '../components/atoms/Imagen'
import FormContacto from '../components/organisms/FormContacto'

export default function Contacto() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card className="shadow-sm border-0 p-4 p-md-5">
              <div className="text-center mb-4">
                <Imagen
                  src="/icon-no-bg.png"
                  alt="Logo Librería Siamés"
                  className="mb-3"
                  style={{ maxWidth: 120 }}
                />
                <h2 className="fw-bold text-dark">Contáctanos</h2>
                <p className="text-muted">Déjanos tu mensaje y te responderemos a la brevedad.</p>
              </div>
              <FormContacto />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
