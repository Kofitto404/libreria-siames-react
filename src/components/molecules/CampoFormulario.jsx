import { Form } from 'react-bootstrap'
import CampoTexto from '../atoms/CampoTexto'

export default function CampoFormulario({ id, etiqueta, error, children, ...control }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label className="fw-semibold">{etiqueta}</Form.Label>
      <CampoTexto isInvalid={Boolean(error)} {...control} />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      {children}
    </Form.Group>
  )
}
