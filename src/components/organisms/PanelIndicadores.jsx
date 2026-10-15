import { useState } from 'react'
import { ButtonGroup, Card, Col, ProgressBar, Row, Spinner } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Seccion from '../molecules/Seccion'

export default function PanelIndicadores() {
  const [cargando, setCargando] = useState(false)
  const [progreso, setProgreso] = useState(35)

  const simularCarga = () => {
    setCargando(true)
    setTimeout(() => setCargando(false), 1500)
  }

  return (
    <Seccion titulo="Botones e indicadores" sub="Acciones y estados de carga" rn="Button, TouchableOpacity, ActivityIndicator, ProgressBar">
      <Row className="g-4">
        <Col xs={12} md={6}>
          <Card className="h-100 shadow-sm border-0"><Card.Body>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <Boton variant="primary">Primary</Boton>
              <Boton variant="success">Success</Boton>
              <Boton variant="danger">Danger</Boton>
              <Boton>Outline</Boton>
              <Boton variant="link">Link</Boton>
              <Boton variant="primary" disabled>Disabled</Boton>
            </div>
            <ButtonGroup aria-label="Grupo de botones">
              <Boton>Izq</Boton><Boton>Centro</Boton><Boton>Der</Boton>
            </ButtonGroup>
          </Card.Body></Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="h-100 shadow-sm border-0"><Card.Body>
            <div className="d-flex align-items-center gap-3 mb-3">
              <Boton onClick={simularCarga} disabled={cargando}>{cargando ? 'Cargando…' : 'Simular carga'}</Boton>
              {cargando && <Spinner animation="border" size="sm" variant="primary" role="status" />}
            </div>
            <ProgressBar now={progreso} label={`${progreso}%`} className="mb-2" />
            <ButtonGroup size="sm">
              <Boton variant="outline-secondary" onClick={() => setProgreso((p) => Math.max(0, p - 10))}>−10</Boton>
              <Boton variant="outline-secondary" onClick={() => setProgreso((p) => Math.min(100, p + 10))}>+10</Boton>
            </ButtonGroup>
          </Card.Body></Card>
        </Col>
      </Row>
    </Seccion>
  )
}
