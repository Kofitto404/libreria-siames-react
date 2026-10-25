import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../components/atoms/Boton'

export default function PaginaPendiente({ titulo = 'Página en construcción' }) {
    return (
        <Container className="py-5 text-center">
            <h2 className="fw-bold mb-3">{titulo}</h2>
            <p className="text-muted mb-4">Esta página todavía no se migra a React.</p>
            <Boton as={Link} to="/">Volver al inicio</Boton>
        </Container>
    )
}