import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Icono from '../../components/atoms/Icono'
import TablaStock from '../../components/organisms/TablaStock'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import { useInventario } from '../../context/InventarioContext'
import { libros } from '../../data/libros'

export default function GestionStock() {
  const [busqueda, setBusqueda] = useState('')
  const { stockDe, establecerStock } = useInventario()

  const termino = busqueda.trim().toLowerCase()
  const productos = libros
    .filter((l) => l.titulo.toLowerCase().includes(termino))
    .map((l) => ({ id: l.id, titulo: l.titulo, stock: stockDe(l.id) }))

  return (
    <PlantillaPanel titulo="Gestión de stock">
      <InputGroup className="mb-4">
        <InputGroup.Text>
          <Icono nombre="magnifying-glass" />
        </InputGroup.Text>
        <Form.Control placeholder="Buscar producto..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
      </InputGroup>
      <TablaStock productos={productos} editable onGuardar={establecerStock} />
    </PlantillaPanel>
  )
}
