import { Container, Nav, Navbar } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import IconoCarrito from '../molecules/IconoCarrito'

export default function Encabezado({ nombre, carrito, onNavegar }) {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand className="text-primary" role="button" onClick={() => onNavegar('/')}>
          <Icono nombre="book" className="me-2" /><strong>Librería Siamés</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link active>Inicio</Nav.Link>
            <Nav.Link href="#listas">Productos</Nav.Link>
            <Nav.Link href="#formularios">Categorías</Nav.Link>
            <Nav.Link href="#dialogos">Contacto</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <IconoCarrito cantidad={carrito} />
            <Boton size="sm">{nombre || 'Perfil'}</Boton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
