import { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import Imagen from '../atoms/Imagen'
import Insignia from '../atoms/Insignia'
import Precio from '../atoms/Precio'
import { useInventario } from '../../context/InventarioContext'

export default function TarjetaLibro({ libro, onAgregar }) {
    const [agregado, setAgregado] = useState(false)
    const temporizador = useRef(null)
    const { stockDe } = useInventario()
    const sinStock = stockDe(libro.id) <= 0
    const rutaDetalle = `/productos/${libro.id}`

    useEffect(() => () => clearTimeout(temporizador.current), [])

    const manejarAgregar = () => {
        onAgregar(libro)
        setAgregado(true)
        clearTimeout(temporizador.current)
        temporizador.current = setTimeout(() => setAgregado(false), 1500)
    }

    return (
        <Card className="h-100 shadow-sm border-0">
            <Link to={rutaDetalle}>
                <Card.Img as={Imagen} variant="top" src={libro.img} alt={libro.titulo} />
            </Link>

            <Card.Body className="d-flex flex-column">
                <span className="text-muted small mb-1">{libro.categoria} | {libro.autor}</span>

                <Card.Title className="fs-6 fw-bold">
                    <Link to={rutaDetalle} className="text-dark text-decoration-none">{libro.titulo}</Link>
                    {libro.descuento && (
                        <Insignia bg="danger" className="ms-1">{libro.descuento}% OFF</Insignia>
                    )}
                </Card.Title>

                <Precio valor={libro.precio} antes={libro.precioAntes} />

                <Boton
                    size="sm"
                    className="mt-auto w-100"
                    variant={agregado ? 'success' : 'outline-primary'}
                    disabled={sinStock}
                    onClick={manejarAgregar}
                >
                    {sinStock ? (
                        'Sin stock'
                    ) : agregado ? (
                        <><Icono nombre="check" className="me-2" />¡Añadido!</>
                    ) : (
                        <><Icono nombre="basket-shopping" className="me-2" />Agregar al Carrito</>
                    )}
                </Boton>
            </Card.Body>
        </Card>
    )
}