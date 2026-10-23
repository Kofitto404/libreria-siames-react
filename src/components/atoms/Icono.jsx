export default function Icono({ nombre, estilo = 'solid', className = '' }) {
  return <i className={`fa-${estilo} fa-${nombre} ${className}`} aria-hidden="true"></i>
}
