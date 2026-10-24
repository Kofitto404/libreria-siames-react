import { Outlet } from 'react-router-dom'
import BarraAnuncios from '../molecules/BarraAnuncios'
import Encabezado from '../organisms/Encabezado'
import PiePagina from '../organisms/PiePagina'
import useScrollAlHash from '../../hooks/useScrollAlHash'

export default function PlantillaPrincipal() {
  useScrollAlHash()

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