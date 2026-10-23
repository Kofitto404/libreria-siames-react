import { Col, Container, Row } from 'react-bootstrap'
import { Link, Navigate, useParams } from 'react-router-dom'
import Icono from '../components/atoms/Icono'
import Imagen from '../components/atoms/Imagen'
import Insignia from '../components/atoms/Insignia'
import SeccionComentarios from '../components/organisms/SeccionComentarios'
import { noticiaPorId } from '../data/noticias'

export default function DetalleNoticia() {
  const { id } = useParams()
  const noticia = noticiaPorId(id)

  if (!noticia) return <Navigate to="/blog" replace />

  const { titulo, categoria, fecha, imagen, contenido } = noticia

  return (
    <Container className="py-4">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/blog" className="text-decoration-none">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{titulo}</li>
        </ol>
      </nav>

      <Row className="justify-content-center">
        <Col lg={9}>
          <div className="mb-4 text-center">
            <Insignia bg={categoria.bg} className={`mb-2 ${categoria.claseTexto ?? ''}`}>
              {categoria.texto}
            </Insignia>
            <h1 className="fw-bold mb-3">{titulo}</h1>
            <p className="text-muted">
              <Icono nombre="calendar" estilo="regular" className="me-1" /> {fecha}
            </p>
          </div>

          <div className="text-center mb-4">
            <Imagen
              src={imagen}
              alt={titulo}
              className="rounded-3 shadow-sm"
              style={{ maxHeight: 450, width: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="fs-5 lh-lg text-secondary mb-5">{contenido}</div>

          <hr className="my-5" />

          <SeccionComentarios key={id} noticiaId={id} />
        </Col>
      </Row>
    </Container>
  )
}
