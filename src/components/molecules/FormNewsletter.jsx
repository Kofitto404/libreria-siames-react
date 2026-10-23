import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import CampoTexto from '../atoms/CampoTexto'

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function FormNewsletter({ onSuscribir }) {
  const [correo, setCorreo] = useState('')
  const [invalido, setInvalido] = useState(false)

  const enviar = (e) => {
    e.preventDefault()
    if (!regexCorreo.test(correo)) {
      setInvalido(true)
      return
    }
    setInvalido(false)
    onSuscribir(correo)
    setCorreo('')
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <InputGroup hasValidation className="mb-3">
        <CampoTexto
          type="email"
          placeholder="Tu correo electrónico"
          aria-label="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          isInvalid={invalido}
        />
        <Boton variant="primary" type="submit">Suscribir</Boton>
        <Form.Control.Feedback type="invalid">Ingresa un correo válido.</Form.Control.Feedback>
      </InputGroup>
    </Form>
  )
}