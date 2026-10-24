import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Icono from '../components/atoms/Icono'
import PanelRol from '../components/molecules/PanelRol'
import { PANELES_POR_ROL } from '../data/paneles'
import { useSesion } from '../context/SesionContext'
import { ETIQUETAS_ROL } from '../utils/roles'

export default function MiCuenta() {
  const { usuario, cerrarSesion } = useSesion()
  const navigate = useNavigate()

  const cerrar = () => {
    cerrarSesion()
    navigate('/')
  }

  const datos = [
    ['ID de cuenta', `#${usuario.id}`],
    ['Nombres', usuario.nombres],
    ['Apellidos', usuario.apellidos],
    ['Correo', usuario.correo],
    ['Rol asignado', ETIQUETAS_ROL[usuario.tipo]],
  ]

  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0 p-4 mb-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <h2 className="fw-bold mb-0">Panel de usuario</h2>
          <Boton variant="outline-danger" onClick={cerrar}>
            <Icono nombre="right-from-bracket" className="me-2" />
            Cerrar sesión
          </Boton>
        </div>
        <Row className="g-3">
          {datos.map(([etiqueta, valor]) => (
            <Col md={6} key={etiqueta}>
              <p className="mb-1 text-muted small">{etiqueta}</p>
              <p className="fs-5 mb-0">{valor}</p>
            </Col>
          ))}
        </Row>
      </Card>

      <Row className="g-4">
        {(PANELES_POR_ROL[usuario.tipo] ?? []).map((panel) => (
          <Col md={6} lg={4} key={panel.titulo}>
            <PanelRol {...panel} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
