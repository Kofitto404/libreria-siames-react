import { Container, Nav, Navbar } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Imagen from '../atoms/Imagen'
import Icon from '../../../public/icon-no-bg.png'
import IconoCarrito from '../molecules/IconoCarrito'

export default function Encabezado({ nombre, carrito, onNavegar }) {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" sticky="top" className="shadow-sm">
      <Container>

        <Navbar.Brand className="text-primary d-flex align-items-end" role="button" onClick={() => onNavegar('/')}>
          <Imagen src="/icon-no-bg.png" alt="Librería Siamés" style={{ height: 40, width: 'auto' }} className="me-2 rounded" />
          <strong className="lh-2">Librería Siamés</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link active>Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#categorias">Categorías</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
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
