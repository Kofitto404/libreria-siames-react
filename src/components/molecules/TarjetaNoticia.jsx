import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import Imagen from '../atoms/Imagen'
import Insignia from '../atoms/Insignia'
import '../../styles/blog.css'

export default function TarjetaNoticia({ noticia }) {
  const { id, titulo, resumen, imagen, fecha, categoria } = noticia
  const ruta = `/blog/${id}`

  return (
    <Card as="article" className="blog-card border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-white">
      <Row className="g-0 align-items-center">
        <Col lg={7} className="p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Insignia bg={categoria.bg} className={categoria.claseTexto}>{categoria.texto}</Insignia>
            <span className="text-muted small">
              <Icono nombre="calendar" estilo="regular" className="me-1" />
              {fecha}
            </span>
          </div>
          <h2 className="h2 fw-bold mb-3">
            <Link to={ruta} className="text-dark text-decoration-none">{titulo}</Link>
          </h2>
          <p className="text-muted mb-4 lead fs-6">{resumen}</p>
          <Boton as={Link} to={ruta}>
            <Icono nombre="book-open" className="me-2" />
            Leer noticia completa
          </Boton>
        </Col>
        <Col lg={5} className="p-3 text-center">
          <Link to={ruta}>
            <Imagen
              src={imagen}
              alt={titulo}
              className="rounded-3 shadow-sm w-100"
              style={{ maxHeight: 320, objectFit: 'cover' }}
            />
          </Link>
        </Col>
      </Row>
    </Card>
  )
}
