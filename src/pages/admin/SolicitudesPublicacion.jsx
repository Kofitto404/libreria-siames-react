import PlantillaPanel from '../../components/templates/PlantillaPanel'
import TarjetaSolicitud from '../../components/molecules/TarjetaSolicitud'
import useLocalStorage from '../../hooks/useLocalStorage'
import { solicitudesIniciales } from '../../data/solicitudes'

export default function SolicitudesPublicacion() {
  const [solicitudes, setSolicitudes] = useLocalStorage('BD_SOLICITUDES_PUBLICACION', solicitudesIniciales)

  const marcarContactado = (id) =>
    setSolicitudes((prev) => prev.map((s) => (s.id === id ? { ...s, estado: 'Revisado' } : s)))

  return (
    <PlantillaPanel titulo="Solicitudes de publicación">
      {solicitudes.length === 0 ? (
        <p className="text-center text-muted py-5">No hay solicitudes de publicación pendientes.</p>
      ) : (
        solicitudes.map((solicitud) => (
          <TarjetaSolicitud key={solicitud.id} solicitud={solicitud} onMarcarContactado={marcarContactado} />
        ))
      )}
    </PlantillaPanel>
  )
}
