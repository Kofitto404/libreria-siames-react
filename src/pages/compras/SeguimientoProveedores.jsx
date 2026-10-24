import { useEffect, useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import TarjetaSeguimiento from '../../components/molecules/TarjetaSeguimiento'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import { useInventario } from '../../context/InventarioContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import { pedidosProveedorIniciales } from '../../data/pedidosProveedor'

export default function SeguimientoProveedores() {
  const { state } = useLocation()
  const [pedidos, setPedidos] = useLocalStorage('BD_PEDIDOS_PROVEEDOR', pedidosProveedorIniciales)
  const { aumentarStock } = useInventario()
  const [alerta, setAlerta] = useState(state?.exito ? 'Orden de compra emitida correctamente al proveedor.' : '')

  useEffect(() => {
    if (!alerta) return
    const t = setTimeout(() => setAlerta(''), 4000)
    return () => clearTimeout(t)
  }, [alerta])

  const avanzar = (idOrden, nuevoEstado) => {
    const pedido = pedidos.find((p) => p.idOrden === idOrden)
    setPedidos((prev) => prev.map((p) => (p.idOrden === idOrden ? { ...p, estado: nuevoEstado } : p)))

    if (nuevoEstado === 'Recibido') {
      aumentarStock(pedido.libroId, pedido.cantidad)
      setAlerta(`Se han sumado ${pedido.cantidad} unidades de "${pedido.producto}" al stock global.`)
    }
  }

  return (
    <PlantillaPanel titulo="Seguimiento de proveedores">
      {alerta && <Alert variant="success" className="text-center fw-medium shadow-sm">{alerta}</Alert>}

      {pedidos.length === 0 ? (
        <p className="text-center text-muted py-5">No hay órdenes de compra registradas.</p>
      ) : (
        <Row className="g-4">
          {pedidos.map((pedido) => (
            <Col md={6} lg={4} key={pedido.idOrden}>
              <TarjetaSeguimiento pedido={pedido} onAvanzar={avanzar} />
            </Col>
          ))}
        </Row>
      )}
    </PlantillaPanel>
  )
}
