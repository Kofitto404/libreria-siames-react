import { useState } from 'react'
import { Accordion, Pagination, Tab, Tabs } from 'react-bootstrap'
import Seccion from '../molecules/Seccion'

export default function PanelNavegacion() {
  const [pagina, setPagina] = useState(1)

  return (
    <Seccion titulo="Navegación interna" sub="Pestañas, acordeón y paginación" rn="TabView, Collapsible, onEndReached">
      <Tabs defaultActiveKey="uno" className="mb-3" fill>
        <Tab eventKey="uno" title="Uno" className="p-3">Contenido de la pestaña uno.</Tab>
        <Tab eventKey="dos" title="Dos" className="p-3">Contenido de la pestaña dos.</Tab>
        <Tab eventKey="tres" title="Tres" disabled />
      </Tabs>
      <Accordion defaultActiveKey="0" className="mb-4 shadow-sm">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sección 1</Accordion.Header>
          <Accordion.Body>Texto de la primera sección.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sección 2</Accordion.Header>
          <Accordion.Body>Texto de la segunda sección.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Pagination className="justify-content-center mb-0">
        <Pagination.Prev disabled={pagina === 1} onClick={() => setPagina((p) => p - 1)} />
        {[1, 2, 3, 4].map((n) => (
          <Pagination.Item key={n} active={n === pagina} onClick={() => setPagina(n)}>{n}</Pagination.Item>
        ))}
        <Pagination.Next disabled={pagina === 4} onClick={() => setPagina((p) => p + 1)} />
      </Pagination>
    </Seccion>
  )
}
