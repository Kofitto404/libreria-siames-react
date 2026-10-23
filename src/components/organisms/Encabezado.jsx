import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Boton from '../atoms/Boton'
import Imagen from '../atoms/Imagen'
import IconoCarrito from '../molecules/IconoCarrito'
import { useCarrito } from '../../context/CarritoContext'
import { useSesion } from '../../context/SesionContext'

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/productos', texto: 'Productos' },
  { to: '/categorias', texto: 'Categorías' },
  { to: '/contacto', texto: 'Contacto' },
  { to: '/blog', texto: 'Blog' },
]

export default function Encabezado() {
  const { totalItems } = useCarrito()
  const { estaIniciado } = useSesion()

  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" sticky="top" className="shadow-sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary d-flex align-items-end">
          <Imagen
            src="/icon-no-bg.png"
            alt="Librería Siamés"
            style={{ height: 40, width: 'auto' }}
            className="me-2 rounded"
          />
          <strong>Librería Siamés</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            {enlaces.map(({ to, texto, end }) => (
              <Nav.Link key={to} as={NavLink} to={to} end={end} eventKey={to}>
                {texto}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <IconoCarrito cantidad={totalItems} />
            {estaIniciado ? (
              <Boton as={Link} to="/mi-cuenta" variant="primary" size="sm">Mi Cuenta</Boton>
            ) : (
              <Boton as={Link} to="/login" size="sm">Iniciar Sesión</Boton>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}