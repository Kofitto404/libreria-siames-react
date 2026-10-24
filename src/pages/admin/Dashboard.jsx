import { Col, Row } from 'react-bootstrap'
import TarjetaEstadistica from '../../components/molecules/TarjetaEstadistica'
import GraficosDashboard from '../../components/organisms/GraficosDashboard'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import useLocalStorage from '../../hooks/useLocalStorage'
import { solicitudesIniciales } from '../../data/solicitudes'

export default function Dashboard() {
  const [solicitudes] = useLocalStorage('BD_SOLICITUDES_PUBLICACION', solicitudesIniciales)
  const pendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length

  return (
    <PlantillaPanel titulo="Dashboard">
      <Row className="g-4 mb-4">
        <Col md={4}>
          <TarjetaEstadistica titulo="Ventas del mes" valor="$1.245.000" variante="primary" />
        </Col>
        <Col md={4}>
          <TarjetaEstadistica titulo="Rentabilidad neta" valor="$485.500" variante="success" />
        </Col>
        <Col md={4}>
          <TarjetaEstadistica
            titulo="Solicitudes de publicación"
            valor={`${pendientes} Pendiente${pendientes !== 1 ? 's' : ''}`}
            variante="info"
          />
        </Col>
      </Row>
      <GraficosDashboard />
    </PlantillaPanel>
  )
}
