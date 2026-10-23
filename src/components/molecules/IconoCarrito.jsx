import { Link } from 'react-router-dom'
import Icono from '../atoms/Icono'
import Insignia from '../atoms/Insignia'

export default function IconoCarrito({ cantidad = 0 }) {
  return (
    <Link
      to="/carrito"
      className="text-dark text-decoration-none position-relative"
      aria-label={`Carrito (${cantidad} productos)`}
    >
      <Icono nombre="cart-shopping" className="fs-5" />
      {cantidad > 0 && (
        <Insignia
          bg="danger"
          pill
          className="position-absolute top-0 start-100 translate-middle"
          style={{ fontSize: '0.65rem' }}
        >
          {cantidad}
        </Insignia>
      )}
    </Link>
  )
}