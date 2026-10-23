import Icono from '../atoms/Icono'

export default function CalificacionEstrellas({ valor = 0, onCambiar, className = '' }) {
  return (
    <span className={`text-warning ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const icono = <Icono nombre="star" estilo={n <= valor ? 'solid' : 'regular'} />
        return onCambiar ? (
          <button
            key={n}
            type="button"
            className="btn btn-link text-warning p-0 me-1 fs-4"
            aria-label={`${n} ${n === 1 ? 'estrella' : 'estrellas'}`}
            onClick={() => onCambiar(n)}
          >
            {icono}
          </button>
        ) : (
          <span key={n} className="me-1">{icono}</span>
        )
      })}
    </span>
  )
}
