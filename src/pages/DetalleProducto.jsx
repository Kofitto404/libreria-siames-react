import { useEffect, useRef, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Icono from '../components/atoms/Icono'
import Imagen from '../components/atoms/Imagen'
import Insignia from '../components/atoms/Insignia'
import Precio from '../components/atoms/Precio'
import Seccion from '../components/molecules/Seccion'
import GrillaLibros from '../components/organisms/GrillaLibros'
import { useCarrito } from '../context/CarritoContext'
import { useInventario } from '../context/InventarioContext'
import { categorias } from '../data/categorias'
import { librosPorCategoria, obtenerLibro } from '../data/libros'
import useScrollAlHash from '../hooks/useScrollAlHash'


const MAX_POR_COMPRA = 5
const UMBRAL_ULTIMAS_UNIDADES = 10

export default function DetalleProducto() {
    const { id } = useParams()
    const libro = obtenerLibro(id)
    const { agregar, items } = useCarrito()
    const { stockDe } = useInventario()
    const [cantidad, setCantidad] = useState(1)
    const [agregado, setAgregado] = useState(false)
    const temporizador = useRef(null)

    useScrollAlHash()

    useEffect(() => () => clearTimeout(temporizador.current), [])

    if (!libro) {
        return (
            <Container className="py-5 text-center">
                <h2 className="fw-bold mb-3">Producto no encontrado</h2>
                <Boton as={Link} to="/productos">Ver productos</Boton>
            </Container>
        )
    }

    // Stock disponible = stock de bodega menos lo que ya hay en el carrito.
    const enCarrito = items.find((i) => i.id === libro.id)?.cantidad ?? 0
    const disponible = Math.max(0, stockDe(libro.id) - enCarrito)
    const maxComprable = Math.min(MAX_POR_COMPRA, disponible)
    const sinStock = maxComprable === 0
    const cantidadSegura = Math.min(cantidad, maxComprable) || 1

    const categoriaNombre =
        categorias.find((c) => c.id === libro.categoriaId)?.nombre ?? libro.categoria
    const relacionados = librosPorCategoria(libro.categoriaId)
        .filter((l) => l.id !== libro.id)
        .slice(0, 4)

    const manejarAgregar = () => {
        agregar(libro, cantidadSegura)
        setAgregado(true)
        clearTimeout(temporizador.current)
        temporizador.current = setTimeout(() => setAgregado(false), 2000)
    }

    const claseStock = sinStock || disponible <= UMBRAL_ULTIMAS_UNIDADES ? 'text-danger' : 'text-success'

    return (
        <>
            <Container className="py-4">
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb small">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={`/categorias#${libro.categoriaId}`} className="text-decoration-none">
                                {categoriaNombre}
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{libro.titulo}</li>
                    </ol>
                </nav>

                <Row className="g-5">
                    <Col lg={7}>
                        <div className="border rounded bg-white p-3 text-center shadow-sm">
                            <Imagen
                                src={libro.img}
                                alt={libro.titulo}
                                className="rounded"
                                style={{ maxHeight: 440, objectFit: 'contain' }}
                            />
                        </div>
                    </Col>

                    <Col lg={5} className="d-flex flex-column">
                        <h1 className="fw-bold fs-2 border-bottom pb-2 mb-2">{libro.titulo}</h1>
                        <p className="text-muted mb-3">{libro.autor}</p>

                        <Precio valor={libro.precio} antes={libro.precioAntes} />

                        <p className={`small fw-bold mb-3 ${claseStock}`}>
                            {sinStock ? (
                                'Sin stock disponible'
                            ) : (
                                <>
                                    <Icono nombre="box" className="me-1" />
                                    Stock disponible: {disponible} unidades
                                    {disponible <= UMBRAL_ULTIMAS_UNIDADES && (
                                        <Insignia bg="danger" className="ms-2">¡Últimas unidades!</Insignia>
                                    )}
                                </>
                            )}
                        </p>

                        <p className="text-muted small mb-4">
                            Ejemplar en perfecto estado. Incluye acceso inmediato al despacho express a domicilio.
                        </p>

                        <div className="d-flex align-items-center gap-3 mb-4">
                            <Form.Label htmlFor="cantidad" className="fw-bold small mb-0">Cantidad:</Form.Label>
                            <Form.Select
                                id="cantidad"
                                size="sm"
                                className="w-auto"
                                value={cantidadSegura}
                                disabled={sinStock}
                                onChange={(e) => setCantidad(Number(e.target.value))}
                            >
                                {Array.from({ length: maxComprable }, (_, i) => i + 1).map((n) => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </Form.Select>
                        </div>

                        <Boton
                            className="w-100 py-2 fw-semibold"
                            variant={agregado ? 'success' : 'primary'}
                            disabled={sinStock}
                            onClick={manejarAgregar}
                        >
                            {sinStock ? (
                                'Sin stock'
                            ) : agregado ? (
                                <><Icono nombre="check" className="me-2" />¡Añadido al carrito!</>
                            ) : (
                                <><Icono nombre="basket-shopping" className="me-2" />Añadir al carrito</>
                            )}
                        </Boton>
                    </Col>
                </Row>
            </Container>

            {relacionados.length > 0 && (
                <Seccion titulo="También te puede interesar" claro>
                    <GrillaLibros libros={relacionados} onAgregar={agregar} />
                </Seccion>
            )}
        </>
    )
}