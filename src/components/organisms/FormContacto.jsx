import { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import CampoFormulario from '../molecules/CampoFormulario'
import { useSesion } from '../../context/SesionContext'

const MAX_COMENTARIO = 500
const DOMINIOS_PERMITIDOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com']
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validar({ nombre, correo, comentarios }) {
  const errores = {}
  if (!nombre.trim()) errores.nombre = 'El nombre es obligatorio.'

  const c = correo.trim()
  if (!c || !regexCorreo.test(c) || !DOMINIOS_PERMITIDOS.some((d) => c.endsWith(d))) {
    errores.correo = 'El correo es obligatorio y debe pertenecer a @gmail.com, @duoc.cl o @profesor.duoc.cl.'
  }

  const m = comentarios.trim()
  if (!m || m.length > MAX_COMENTARIO) errores.comentarios = 'El comentario es obligatorio.'
  return errores
}

function valoresIniciales(usuario) {
  const nombre = `${usuario?.nombres ?? ''} ${usuario?.apellidos ?? ''}`.trim() || usuario?.nombre || ''
  return { nombre, correo: usuario?.correo ?? '', comentarios: '' }
}

export default function FormContacto() {
  const { usuario } = useSesion()
  const [valores, setValores] = useState(() => valoresIniciales(usuario))
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    if (!enviado) return
    const t = setTimeout(() => setEnviado(false), 4000)
    return () => clearTimeout(t)
  }, [enviado])

  const cambiar = (campo) => (e) => {
    setValores((v) => ({ ...v, [campo]: e.target.value }))
    setErrores((er) => ({ ...er, [campo]: undefined }))
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = validar(valores)
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    setEnviado(true)
    setValores(valoresIniciales(usuario))
  }

  return (
    <>
      {enviado && (
        <Alert variant="success" className="mb-4" role="alert">
          ¡Mensaje enviado con éxito! Nos contactaremos contigo pronto.
        </Alert>
      )}

      <Form onSubmit={enviar} noValidate>
        <CampoFormulario
          id="contactoNombre"
          etiqueta="Nombre completo *"
          type="text"
          value={valores.nombre}
          onChange={cambiar('nombre')}
          error={errores.nombre}
        />

        <CampoFormulario
          id="contactoCorreo"
          etiqueta="Correo electrónico *"
          type="email"
          placeholder="ejemplo@gmail.com"
          value={valores.correo}
          onChange={cambiar('correo')}
          error={errores.correo}
        />

        <CampoFormulario
          id="contactoComentarios"
          etiqueta="Comentarios *"
          as="textarea"
          rows={5}
          maxLength={MAX_COMENTARIO}
          placeholder="Escribe tu mensaje (máximo 500 caracteres)..."
          value={valores.comentarios}
          onChange={cambiar('comentarios')}
          error={errores.comentarios}
        >
          <small className="text-muted d-block text-end mt-1">
            {valores.comentarios.length}/{MAX_COMENTARIO}
          </small>
        </CampoFormulario>

        <Boton type="submit" variant="primary" className="w-100 py-2 fw-bold mt-2">
          <Icono nombre="paper-plane" className="me-2" />
          Enviar mensaje
        </Boton>
      </Form>
    </>
  )
}
