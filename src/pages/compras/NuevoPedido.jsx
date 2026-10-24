import { useNavigate } from 'react-router-dom'
import FormNuevoPedido from '../../components/organisms/FormNuevoPedido'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import useLocalStorage from '../../hooks/useLocalStorage'
import { pedidosProveedorIniciales } from '../../data/pedidosProveedor'

export default function NuevoPedido() {
  const [, setPedidos] = useLocalStorage('BD_PEDIDOS_PROVEEDOR', pedidosProveedorIniciales)
  const navigate = useNavigate()

  const crearPedido = (datos) => {
    const pedido = {
      idOrden: `PRV-${Math.floor(1000 + Math.random() * 9000)}`,
      ...datos,
      fechaEmision: new Date().toLocaleDateString('es-CL'),
      estado: 'En preparación',
    }
    setPedidos((prev) => [pedido, ...prev])
    navigate('/panel/compras/seguimiento', { state: { exito: true } })
  }

  return (
    <PlantillaPanel titulo="Nuevo pedido a proveedor">
      <FormNuevoPedido onCrear={crearPedido} />
    </PlantillaPanel>
  )
}
