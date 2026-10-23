import Icono from '../atoms/Icono'
import CalificacionEstrellas from './CalificacionEstrellas'

export default function ComentarioItem({ comentario }) {
  const { autor, calificacion, texto, fecha } = comentario
  return (
    <div className="border-bottom pb-3 mb-3">
      <div className="d-flex justify-content-between align-items-start mb-1">
        <div>
          <strong>
            <Icono nombre="circle-user" className="text-primary me-2" />
            {autor}
          </strong>
          <div className="mt-1 small">
            <CalificacionEstrellas valor={calificacion} />
          </div>
        </div>
        <span className="text-muted small">{new Date(fecha).toLocaleString('es-CL')}</span>
      </div>
      <p className="mb-0 text-dark">{texto}</p>
    </div>
  )
}
