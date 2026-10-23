import { Col, Row } from 'react-bootstrap'
import TarjetaLibro from '../molecules/TarjetaLibro'

export default function GrillaLibros({ libros, onAgregar }) {
    return (
        <Row className="g-4">
            {libros.map((libro) => (
                <Col key={libro.id} md={3} sm={6}>
                    <TarjetaLibro libro={libro} onAgregar={onAgregar} />
                </Col>
            ))}
        </Row>
    )
}