import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Imagen from '../atoms/Imagen'

export default function TarjetaCategoria({ categoria }) {
    return (
        <Link to={`/categorias#${categoria.id}`} className="text-decoration-none">
            <Card className="bg-dark text-white border-0 shadow-sm">
                <Card.Img as={Imagen} src={categoria.img} className="opacity-50" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title as="h3" className="fw-bold">{categoria.nombre}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}