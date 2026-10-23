import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import CampoTexto from '../atoms/CampoTexto'

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function FormNewsletter({ onSuscribir }) {
  const [correo, setCorreo] = useState('')
  const [invalido, setInvalido] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) => {
    setCorreo(e.target.value)
    setEnviado(false)
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!regexCorreo.test(correo)) {
      setInvalido(true)
      setEnviado(false)
      return
    }
    setInvalido(false)
    setEnviado(true)
    onSuscribir?.(correo)
    setCorreo('')
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <InputGroup hasValidation className="mb-2">
        <CampoTexto
          type="email"
          placeholder="Tu correo electrónico"
          aria-label="Correo electrónico"
          value={correo}
          onChange={cambiar}
          isInvalid={invalido}
        />
        <Boton variant="primary" type="submit">Suscribir</Boton>
        <Form.Control.Feedback type="invalid">Ingresa un correo válido.</Form.Control.Feedback>
      </InputGroup>
      {enviado && <p className="text-success small mb-0">¡Gracias por suscribirte!</p>}
    </Form>
  )
}