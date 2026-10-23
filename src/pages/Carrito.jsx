import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Icono from '../components/atoms/Icono'
import Imagen from '../components/atoms/Imagen'
import Seccion from '../components/molecules/Seccion'
import { useCarrito } from '../context/CarritoContext'
import { formatearPrecio } from '../utils/formatearPrecio'

export default function Carrito() {
    const { items, total, quitar, vaciar } = useCarrito()

    if (items.length === 0) {
        return (
            <Seccion titulo="Tu carrito">
                <div className="text-center py-4">
                    <Icono nombre="basket-shopping" className="text-muted mb-3 fs-1" />
                    <h5 className="text-muted">Tu carrito está vacío</h5>
                    <Boton as={Link} to="/" className="mt-3">Volver a la tienda</Boton>
                </div>
            </Seccion>
        )
    }

    return (
        <Seccion titulo="Tu carrito">
            <ListGroup className="mb-4 shadow-sm">
                {items.map((i) => (
                    <ListGroup.Item key={i.id} className="d-flex align-items-center gap-3">
                        <Imagen src={i.img} alt={i.titulo} style={{ height: 64, width: 'auto' }} className="rounded" />
                        <div className="flex-grow-1">
                            <h6 className="fw-bold mb-0">{i.titulo}</h6>
                            <small className="text-muted">{formatearPrecio(i.precio)} c/u · x{i.cantidad}</small>
                        </div>
                        <strong>{formatearPrecio(i.precio * i.cantidad)}</strong>
                        <Boton variant="outline-danger" size="sm" aria-label={`Quitar ${i.titulo}`} onClick={() => quitar(i.id)}>
                            <Icono nombre="trash" />
                        </Boton>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <div className="d-flex justify-content-between align-items-center">
                <Boton variant="outline-secondary" onClick={vaciar}>Vaciar carrito</Boton>
                <h4 className="mb-0">Total: <span className="text-primary">{formatearPrecio(total)}</span></h4>
            </div>
        </Seccion>
    )
}