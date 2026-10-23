import { Card } from 'react-bootstrap'
import Imagen from '../atoms/Imagen'
import Insignia from '../atoms/Insignia'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import Precio from '../atoms/Precio'

export default function TarjetaLibro({ libro, onAgregar, onVer }) {
    return (
        <Card className="h-100 shadow-sm border-0">
            <Card.Img as={Imagen} variant="top" src={libro.img} alt={libro.titulo}
                role="button" onClick={() => onVer(libro)} />
            <Card.Body className="d-flex flex-column">
                <span className="text-muted small mb-1">{libro.categoria} | {libro.autor}</span>
                <Card.Title className="fs-6 fw-bold">
                    {libro.titulo}
                    {libro.descuento && <Insignia bg="danger" className="ms-1">{libro.descuento}% OFF</Insignia>}
                </Card.Title>
                <Precio valor={libro.precio} antes={libro.precioAntes} />
                <Boton size="sm" className="mt-auto w-100" onClick={() => onAgregar(libro)}>
                    <Icono nombre="basket-shopping" className="me-2" />Agregar al Carrito
                </Boton>
            </Card.Body>
        </Card>
    )
}