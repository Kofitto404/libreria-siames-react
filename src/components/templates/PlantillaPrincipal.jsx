import { Outlet } from 'react-router-dom'
import BarraAnuncios from '../molecules/BarraAnuncios'
import Encabezado from '../organisms/Encabezado'
import PiePagina from '../organisms/PiePagina'

// Layout compartido: las páginas se dibujan dentro de <Outlet />.
export default function PlantillaPrincipal() {
  return (
    <>
      <BarraAnuncios />
      <Encabezado />
      <main>
        <Outlet />
      </main>
      <PiePagina />
    </>
  )
}