import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSesion } from '../../context/SesionContext'

export default function RutaProtegida({ roles }) {
  const { usuario, estaIniciado } = useSesion()
  const { pathname } = useLocation()

  if (!estaIniciado) {
    return <Navigate to="/login" replace state={{ desde: pathname }} />
  }
  if (roles && usuario.tipo !== 'admin' && !roles.includes(usuario.tipo)) {
    return <Navigate to="/mi-cuenta" replace />
  }
  return <Outlet />
}
