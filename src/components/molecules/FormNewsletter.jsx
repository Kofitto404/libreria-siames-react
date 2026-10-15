import { InputGroup } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import CampoTexto from '../atoms/CampoTexto'

export default function FormNewsletter({ onSuscribir }) {
  return (
    <InputGroup className="mb-3">
      <CampoTexto type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" />
      <Boton variant="primary" onClick={onSuscribir}>Suscribir</Boton>
    </InputGroup>
  )
}
