import { Col, Container, Row } from 'react-bootstrap'
import EncabezadoPagina from '../components/molecules/EncabezadoPagina'
import SeccionCatalogo from '../components/molecules/SeccionCatalogo'
import BarraLateral from '../components/organisms/BarraLateral'
import GrillaLibros from '../components/organisms/GrillaLibros'
import { useCarrito } from '../context/CarritoContext'
import { librosPorCategoria, librosPorSeccion } from '../data/libros'
import useScrollAlHash from '../hooks/useScrollAlHash'

const seccionesLibros = [
    { id: 'destacados', titulo: 'Destacados', sub: 'Lo más popular de nuestra tienda', libros: librosPorSeccion('destacado') },
    { id: 'ofertas', titulo: 'Ofertas', sub: 'Libros con precio reducido', libros: librosPorSeccion('oferta') },
    { id: 'nuevos', titulo: 'Nuevos', sub: 'Recién llegados a la librería', libros: librosPorSeccion('nuevo') },
]

const seccionJuegos = {
    id: 'juegos-de-mesa',
    titulo: 'Juegos de Mesa',
    sub: 'Para compartir en familia y con amigos',
    libros: librosPorCategoria('juegos-de-mesa'),
}

const grupos = [
    {
        titulo: 'Libros',
        enlaces: seccionesLibros.map(({ id, titulo }) => ({ id, texto: titulo })),
    },
    {
        titulo: 'Entretención',
        enlaces: [{ id: seccionJuegos.id, texto: seccionJuegos.titulo }],
    },
]

export default function Productos() {
    useScrollAlHash()
    const { agregar } = useCarrito()

    return (
        <>
            <EncabezadoPagina titulo="Productos" sub="Explora nuestro catálogo completo" />
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={3}>
                        <BarraLateral grupos={grupos} />
                    </Col>
                    <Col lg={9}>
                        {[...seccionesLibros, seccionJuegos].map(({ id, titulo, sub, libros }) => (
                            <SeccionCatalogo key={id} id={id} titulo={titulo} sub={sub}>
                                <GrillaLibros libros={libros} onAgregar={agregar} />
                            </SeccionCatalogo>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}