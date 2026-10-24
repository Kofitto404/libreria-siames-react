import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function GrupoMenuLateral({ titulo, enlaces }) {
    return (
        <div className="mb-4">
            <h6 className="text-uppercase text-dark fw-bold small mb-2">{titulo}</h6>
            <Nav className="flex-column">
                {enlaces.map(({ id, texto }) => (
                    <Nav.Link key={id} as={Link} to={`#${id}`} className="px-0 py-1 text-dark">
                        {texto}
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    )
}