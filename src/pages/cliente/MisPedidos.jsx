import { Link } from 'react-router-dom'
import Boton from '../../components/atoms/Boton'
import Icono from '../../components/atoms/Icono'
import TarjetaPedido from '../../components/molecules/TarjetaPedido'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import { useSesion } from '../../context/SesionContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import { pedidosClienteIniciales } from '../../data/pedidosCliente'

export default function MisPedidos() {
  const { usuario } = useSesion()
  const [pedidosNuevos] = useLocalStorage('pedidosPersonalizados', {})
  const clave = String(usuario.id)
  const pedidos = [...(pedidosNuevos[clave] ?? []), ...(pedidosClienteIniciales[clave] ?? [])]

  return (
    <PlantillaPanel titulo="Mis pedidos">
      {pedidos.length === 0 ? (
        <div className="text-center py-5">
          <Icono nombre="box-open" className="text-muted fs-1 mb-3" />
          <h5 className="text-muted fw-bold">No tienes pedidos recientes</h5>
          <p className="text-secondary">Tus próximas compras y reservas aparecerán aquí.</p>
          <Boton as={Link} to="/productos" variant="primary" className="mt-2">Ir a la tienda</Boton>
        </div>
      ) : (
        pedidos.map((pedido) => <TarjetaPedido key={pedido.id} pedido={pedido} />)
      )}
    </PlantillaPanel>
  )
}
