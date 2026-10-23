import { Col, Container, Row } from 'react-bootstrap'
import EncabezadoPagina from '../components/molecules/EncabezadoPagina'
import SeccionCatalogo from '../components/molecules/SeccionCatalogo'
import BarraLateral from '../components/organisms/BarraLateral'
import GrillaLibros from '../components/organisms/GrillaLibros'
import { useCarrito } from '../context/CarritoContext'
import { categorias } from '../data/categorias'
import { librosChilenos, librosPorCategoria } from '../data/libros'
import useScrollAlHash from '../hooks/useScrollAlHash'

const ENTRETENCION = 'juegos-de-mesa'

const librosDe = (categoriaId) =>
    categoriaId === 'chilenos' ? librosChilenos() : librosPorCategoria(categoriaId)

const esEntretencion = (categoria) => categoria.id === ENTRETENCION

const secciones = categorias.map((categoria) => {
    const libros = librosDe(categoria.id)
    return {
        id: categoria.id,
        titulo: categoria.nombre,
        sub: `${libros.length} ${libros.length === 1 ? 'título' : 'títulos'}`,
        libros,
    }
})

const aEnlace = (categoria) => ({ id: categoria.id, texto: categoria.nombre })

const grupos = [
    { titulo: 'Libros', enlaces: categorias.filter((c) => !esEntretencion(c)).map(aEnlace) },
    { titulo: 'Entretención', enlaces: categorias.filter(esEntretencion).map(aEnlace) },
]

export default function Categorias() {
    useScrollAlHash()
    const { agregar } = useCarrito()

    return (
        <>
            <EncabezadoPagina titulo="Categorías" sub="Encuentra tu próxima lectura por género" />
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={3}>
                        <BarraLateral grupos={grupos} />
                    </Col>
                    <Col lg={9}>
                        {secciones.map(({ id, titulo, sub, libros }) => (
                            <SeccionCatalogo key={id} id={id} titulo={titulo} sub={sub}>
                                {libros.length > 0 ? (
                                    <GrillaLibros libros={libros} onAgregar={agregar} />
                                ) : (
                                    <p className="text-muted mb-0">Próximamente nuevos títulos.</p>
                                )}
                            </SeccionCatalogo>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}