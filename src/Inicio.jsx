import { Route, Routes } from 'react-router-dom'
import PlantillaPrincipal from './components/templates/PlantillaPrincipal'
import RutaProtegida from './components/templates/RutaProtegida'
import PaginaPendiente from './pages/PaginaPendiente'
import Home from './pages/Home'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Categorias from './pages/Categorias'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import Pago from './pages/Pago'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import DetalleNoticia from './pages/DetalleNoticia'
import Nosotros from './pages/Nosotros'
import Terminos from './pages/Terminos'
import MiCuenta from './pages/MiCuenta'
import Dashboard from './pages/admin/Dashboard'
import GestionUsuarios from './pages/admin/GestionUsuarios'
import SolicitudesPublicacion from './pages/admin/SolicitudesPublicacion'
import ConsultarStock from './pages/vendedor/ConsultarStock'
import GestionStock from './pages/inventario/GestionStock'
import NuevoPedido from './pages/compras/NuevoPedido'
import SeguimientoProveedores from './pages/compras/SeguimientoProveedores'
import MisPedidos from './pages/cliente/MisPedidos'

export default function Inicio() {
  return (
    <Routes>
      <Route element={<PlantillaPrincipal />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetalleNoticia />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pago" element={<Pago />} />

        <Route element={<RutaProtegida />}>
          <Route path="/mi-cuenta" element={<MiCuenta />} />

          <Route element={<RutaProtegida roles={['usuario']} />}>
            <Route path="/mi-cuenta/pedidos" element={<MisPedidos />} />
          </Route>

          <Route element={<RutaProtegida roles={['admin']} />}>
            <Route path="/panel/admin" element={<Dashboard />} />
            <Route path="/panel/admin/usuarios" element={<GestionUsuarios />} />
            <Route path="/panel/admin/solicitudes" element={<SolicitudesPublicacion />} />
          </Route>

          <Route element={<RutaProtegida roles={['vendedor', 'inventario', 'compras']} />}>
            <Route path="/panel/vendedor/stock" element={<ConsultarStock />} />
          </Route>

          <Route element={<RutaProtegida roles={['inventario']} />}>
            <Route path="/panel/inventario/stock" element={<GestionStock />} />
          </Route>

          <Route element={<RutaProtegida roles={['compras']} />}>
            <Route path="/panel/compras/nuevo-pedido" element={<NuevoPedido />} />
            <Route path="/panel/compras/seguimiento" element={<SeguimientoProveedores />} />
          </Route>
        </Route>

        <Route path="/publicar" element={<PaginaPendiente titulo="Publica con Nosotros" />} />
        <Route path="*" element={<PaginaPendiente titulo="Página no encontrada" />} />
      </Route>
    </Routes>
  )
}
