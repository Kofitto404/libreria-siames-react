import { Col, Container, Row } from 'react-bootstrap'
import Imagen from '../components/atoms/Imagen'
import EncabezadoPagina from '../components/molecules/EncabezadoPagina'
import TarjetaCompromiso from '../components/molecules/TarjetaCompromiso'
import TarjetaInfo from '../components/molecules/TarjetaInfo'

const tarjetas = [
  {
    icono: 'users',
    titulo: 'Nuestro Equipo',
    texto:
      'Detrás de cada recomendación hay un equipo apasionado: 4 vendedores expertos, 1 encargado de inventario, 1 responsable de compras y 1 administrador dedicados a traerte las mejores historias.',
  },
  {
    icono: 'book-open',
    titulo: 'Nuestra Comunidad',
    texto:
      'Día a día recibimos a un promedio de 150 lectores en nuestra tienda, logrando que aproximadamente 3.500 libros al mes encuentren un nuevo hogar en nuestros clientes.',
  },
  {
    icono: 'laptop-code',
    titulo: 'Visión',
    texto:
      'Inspirar a Santiago una página a la vez, volviéndonos el destino predilecto para quienes buscan literatura con propósito.',
  },
]

export default function Nosotros() {
  return (
    <div className="bg-light">
      <EncabezadoPagina titulo="Nuestra Historia" sub="Pasión por la lectura desde el corazón de Santiago." />

      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Imagen
              src="/icon-no-bg.png"
              alt="Librería Siamés"
              className="rounded shadow-sm w-75 mx-auto d-block"
            />
          </Col>
          <Col lg={6}>
            <h2 className="fw-bold text-dark mb-3">Más de 15 años de trayectoria</h2>
            <p className="text-muted fs-5">
              <strong>Librería Siamés</strong> es un espacio independiente ubicado en el histórico barrio Lastarria de
              Santiago. A lo largo de los años, nos hemos consolidado como un refugio para los amantes de la lectura,
              ofreciendo un amplio catálogo que supera los <strong>8.000 títulos</strong>. En nuestras estanterías
              podrás encontrar desde obras cumbre de la literatura y textos académicos, hasta libros infantiles y los
              bestsellers más buscados del momento.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {tarjetas.map((t) => (
            <Col md={4} key={t.titulo}>
              <TarjetaInfo {...t} />
            </Col>
          ))}
        </Row>

        <TarjetaCompromiso
          titulo="Compromiso"
          texto="Como empresa estamos comprometidos con nuestros clientes en continuar acercando la lectura a más personas y seguir siendo una librería familiar y cálida, pero a la vez actualizada y moderna, donde puedes encontrar lo que necesites de la forma más rápida y amigable posible, gracias a la incorporación y uso de nuevas tecnologías."
        />
      </Container>
    </div>
  )
}
