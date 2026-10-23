import { Route, Routes } from 'react-router-dom'
import PlantillaPrincipal from './components/templates/PlantillaPrincipal'
import Home from './pages/Home'
import Carrito from './pages/Carrito'
import PaginaPendiente from './pages/PaginaPendiente'

export default function Inicio() {
  return (
    <Routes>
      <Route element={<PlantillaPrincipal />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />

        <Route path="/productos" element={<PaginaPendiente titulo="Productos" />} />
        <Route path="/categorias" element={<PaginaPendiente titulo="Categorías" />} />
        <Route path="/contacto" element={<PaginaPendiente titulo="Contacto" />} />
        <Route path="/blog" element={<PaginaPendiente titulo="Blog" />} />
        <Route path="/login" element={<PaginaPendiente titulo="Iniciar sesión / Registro" />} />
        <Route path="/mi-cuenta" element={<PaginaPendiente titulo="Mi cuenta" />} />
        <Route path="/nosotros" element={<PaginaPendiente titulo="Acerca de Nosotros" />} />
        <Route path="/terminos" element={<PaginaPendiente titulo="Términos y Condiciones" />} />
        <Route path="/publicar" element={<PaginaPendiente titulo="Publica con Nosotros" />} />

        <Route path="*" element={<PaginaPendiente titulo="Página no encontrada" />} />
      </Route>
    </Routes>
  )
}