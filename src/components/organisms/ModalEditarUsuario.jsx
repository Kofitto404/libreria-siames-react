import { useState } from 'react'
import { Alert, Form, Modal } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import CampoFormulario from '../molecules/CampoFormulario'
import { ETIQUETAS_ROL, ROLES_EDITABLES } from '../../utils/roles'
import { esCorreo } from '../../utils/validaciones'

export default function ModalEditarUsuario({ correo, usuario, onGuardar, onCerrar }) {
  const [valores, setValores] = useState({
    correo,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    tipo: usuario.tipo,
    direccion: usuario.direccion ?? '',
  })
  const [errores, setErrores] = useState({})
  const [errorGeneral, setErrorGeneral] = useState('')

  const cambiar = (campo) => (e) => {
    setValores((v) => ({ ...v, [campo]: e.target.value }))
    setErrores((er) => ({ ...er, [campo]: undefined }))
    setErrorGeneral('')
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = {}
    if (!valores.nombres.trim()) nuevos.nombres = 'Los nombres son obligatorios.'
    if (!valores.apellidos.trim()) nuevos.apellidos = 'Los apellidos son obligatorios.'
    if (!esCorreo(valores.correo)) nuevos.correo = 'Ingresa un correo válido.'
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    const ok = onGuardar(correo, {
      correo: valores.correo.trim(),
      nombres: valores.nombres.trim(),
      apellidos: valores.apellidos.trim(),
      tipo: valores.tipo,
      direccion: valores.direccion.trim(),
    })
    if (!ok) setErrorGeneral('El nuevo correo ya está en uso por otro usuario.')
  }

  return (
    <Modal show onHide={onCerrar} centered>
      <Form onSubmit={enviar} noValidate>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Editar usuario #{usuario.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorGeneral && <Alert variant="danger">{errorGeneral}</Alert>}

          <CampoFormulario id="editNombres" etiqueta="Nombres" value={valores.nombres} onChange={cambiar('nombres')} error={errores.nombres} />
          <CampoFormulario id="editApellidos" etiqueta="Apellidos" value={valores.apellidos} onChange={cambiar('apellidos')} error={errores.apellidos} />
          <CampoFormulario id="editCorreo" etiqueta="Correo electrónico" type="email" value={valores.correo} onChange={cambiar('correo')} error={errores.correo} />

          <Form.Group className="mb-3" controlId="editRol">
            <Form.Label className="fw-semibold">Asignar rol</Form.Label>
            <Form.Select value={valores.tipo} onChange={cambiar('tipo')}>
              {ROLES_EDITABLES.map((rol) => (
                <option key={rol} value={rol}>{ETIQUETAS_ROL[rol]}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <CampoFormulario id="editDireccion" etiqueta="Dirección" as="textarea" rows={2} value={valores.direccion} onChange={cambiar('direccion')} />
        </Modal.Body>
        <Modal.Footer>
          <Boton variant="outline-secondary" onClick={onCerrar}>Cancelar</Boton>
          <Boton type="submit" variant="primary">Guardar cambios</Boton>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
