import { Col, Row } from 'react-bootstrap'
import TarjetaLibro from '../molecules/TarjetaLibro'

export default function GrillaLibros({ libros, onAgregar, onVer }) {
    return (
        <Row className="g-4">
            {libros.map(l => (
                <Col key={l.id} md={3} sm={6}>
                    <TarjetaLibro libro={l} onAgregar={onAgregar} onVer={onVer} />
                </Col>
            ))}
        </Row>
    )
}