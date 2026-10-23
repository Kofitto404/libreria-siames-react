import { Col, Row } from 'react-bootstrap'
import TarjetaCategoria from '../molecules/TarjetaCategoria'

export default function GrillaCategorias({ categorias }) {
    return (
        <Row className="g-4">
            {categorias.map((categoria) => (
                <Col key={categoria.id} md={4}>
                    <TarjetaCategoria categoria={categoria} />
                </Col>
            ))}
        </Row>
    )
}