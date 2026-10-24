import { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import { libros } from '../../data/libros'
import { proveedores } from '../../data/pedidosProveedor'

const inicial = { proveedor: '', libroId: '', cantidad: '' }

export default function FormNuevoPedido({ onCrear }) {
  const [valores, setValores] = useState(inicial)
  const [errores, setErrores] = useState({})

  const cambiar = (campo) => (e) => {
    setValores((v) => ({ ...v, [campo]: e.target.value }))
    setErrores((er) => ({ ...er, [campo]: undefined }))
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = {}
    const cantidad = parseInt(valores.cantidad, 10)
    if (!valores.proveedor) nuevos.proveedor = 'Selecciona un proveedor.'
    if (!valores.libroId) nuevos.libroId = 'Selecciona un producto.'
    if (!Number.isInteger(cantidad) || cantidad < 1) nuevos.cantidad = 'Ingresa una cantidad mayor o igual a 1.'
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    const libro = libros.find((l) => l.id === Number(valores.libroId))
    onCrear({ proveedor: valores.proveedor, libroId: libro.id, producto: libro.titulo, cantidad })
  }

  return (
    <Card className="shadow-sm border-0 p-4">
      <Form onSubmit={enviar} noValidate>
        <Form.Group className="mb-3" controlId="selectProveedor">
          <Form.Label className="fw-semibold">Proveedor</Form.Label>
          <Form.Select value={valores.proveedor} onChange={cambiar('proveedor')} isInvalid={Boolean(errores.proveedor)}>
            <option value="" disabled>Seleccione un proveedor</option>
            {proveedores.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errores.proveedor}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="selectProducto">
          <Form.Label className="fw-semibold">Producto a solicitar</Form.Label>
          <Form.Select value={valores.libroId} onChange={cambiar('libroId')} isInvalid={Boolean(errores.libroId)}>
            <option value="" disabled>Seleccione un producto</option>
            {libros.map((l) => (
              <option key={l.id} value={l.id}>{l.titulo}</option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errores.libroId}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="inputCantidad">
          <Form.Label className="fw-semibold">Cantidad</Form.Label>
          <Form.Control type="number" min={1} value={valores.cantidad} onChange={cambiar('cantidad')} isInvalid={Boolean(errores.cantidad)} />
          <Form.Control.Feedback type="invalid">{errores.cantidad}</Form.Control.Feedback>
        </Form.Group>

        <Boton type="submit" variant="primary" className="w-100 py-2 fw-bold">
          <Icono nombre="paper-plane" className="me-2" />
          Emitir orden de compra
        </Boton>
      </Form>
    </Card>
  )
}
