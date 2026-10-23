import { Route, Routes } from 'react-router-dom'
import PlantillaPrincipal from './components/templates/PlantillaPrincipal'
import PaginaPendiente from './pages/PaginaPendiente'
import Home from './pages/Home'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import DetalleNoticia from './pages/DetalleNoticia'
import Nosotros from './pages/Nosotros'
import Terminos from './pages/Terminos'


export default function Inicio() {
  return (
    <Routes>
      <Route element={<PlantillaPrincipal />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetalleNoticia />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/terminos" element={<Terminos />} />

        {/* Pendientes */}
        <Route path="/productos" element={<PaginaPendiente titulo="Productos" />} />
        <Route path="/productos/:id" element={<PaginaPendiente titulo="Detalle del producto" />} />
        <Route path="/categorias" element={<PaginaPendiente titulo="Categorías" />} />
        <Route path="/login" element={<PaginaPendiente titulo="Iniciar sesión / Registro" />} />
        <Route path="/mi-cuenta" element={<PaginaPendiente titulo="Mi cuenta" />} />
        <Route path="/publicar" element={<PaginaPendiente titulo="Publica con Nosotros" />} />

        <Route path="*" element={<PaginaPendiente titulo="Página no encontrada" />} />
      </Route>
    </Routes>
  )
}
