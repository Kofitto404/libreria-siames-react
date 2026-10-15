import { Col, Container, Row } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Imagen from '../atoms/Imagen'
import portada from '../../../public/icon-no-bg.png'

export default function Banner({ nombre, onIrInicio }) {
  return (
    <header className="bg-light py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-dark mb-3">Hola, {nombre || 'Anónimo'}.</h1>
            <p className="lead text-muted mb-4">
              Aqui debo poner el texto del banner
            </p>
            <div className="d-flex flex-wrap gap-2">

              <Boton type="button" className="counter" onClick={onIrInicio}>Ir a Inicio</Boton>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <Imagen src={portada} rounded alt="Portada" className="w-75" />
          </Col>
        </Row>
      </Container>
    </header>
  )
}
