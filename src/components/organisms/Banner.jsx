import { Col, Container, Row } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Imagen from '../atoms/Imagen'
import TextoBanner from '../molecules/TextoBanner'
import fondoImg from '../../assets/background.png'

export default function Banner({
  onIrInicio,
  fondo = fondoImg,
  imagen = '/icon-no-bg.png',
}) {
  return (
    <header
      className="position-relative text-white"
      style={{
        backgroundColor: '#1f2937',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <Container className="position-relative py-5">
        <Row className="align-items-center g-4 py-lg-4">
          <Col xs={12} lg={6} className="text-center text-lg-start">
            <TextoBanner titulo={'Librería independiente desde 2011.'} texto="Contamos con un amplio catálogo de más de 8,000 títulos, incluyendo literatura, textos académicos, libros infantiles y bestsellers." />
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mt-4">
              <Boton type="button" className="counter" variant="outline-light" onClick={onIrInicio}>
                Ir a Inicio
              </Boton>
            </div>
          </Col>
          <Col xs={12} lg={6} className="text-centers">
            <Imagen src={imagen}  className='rounded' alt="Librería Siamés" style={{ maxHeight: 320 }} />
          </Col>
        </Row>
      </Container>
    </header>
  )
}