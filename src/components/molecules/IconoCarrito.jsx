import Icono from '../atoms/Icono'
import Insignia from '../atoms/Insignia'

export default function IconoCarrito({ cantidad = 0 }) {
  return (
    <span className="text-dark position-relative">
      <Icono nombre="cart-shopping" className="fs-5" />
      {cantidad > 0 && (
        <Insignia pill className="position-absolute top-0 start-100 translate-middle">{cantidad}</Insignia>
      )}
    </span>
  )
}
