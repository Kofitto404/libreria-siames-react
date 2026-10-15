export default function Icono({ nombre, className = '' }) {
  return <i className={`fa-solid fa-${nombre} ${className}`} aria-hidden="true"></i>
}
