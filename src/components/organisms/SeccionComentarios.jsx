import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Boton from '../atoms/Boton'
import CampoTexto from '../atoms/CampoTexto'
import Icono from '../atoms/Icono'
import CalificacionEstrellas from '../molecules/CalificacionEstrellas'
import ComentarioItem from '../molecules/ComentarioItem'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useSesion } from '../../context/SesionContext'

export default function SeccionComentarios({ noticiaId }) {
  const navigate = useNavigate()
  const { usuario, estaIniciado } = useSesion()
  const [comentarios, setComentarios] = useLocalStorage(`comentarios-${noticiaId}`, [])
  const [calificacion, setCalificacion] = useState(0)
  const [texto, setTexto] = useState('')

  const requerirLogin = () => {
    if (estaIniciado) return true
    navigate('/login')
    return false
  }

  const calificar = (n) => {
    if (requerirLogin()) setCalificacion(n)
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!requerirLogin()) return
    const limpio = texto.trim()
    if (!limpio) return

    const autor =
      `${usuario?.nombres ?? ''} ${usuario?.apellidos ?? ''}`.trim() || usuario?.nombre || 'Usuario Registrado'

    setComentarios([
      { id: Date.now(), autor, calificacion, texto: limpio, fecha: new Date().toISOString() },
      ...comentarios,
    ])
    setTexto('')
    setCalificacion(0)
  }

  return (
    <section className="bg-light p-4 rounded-3 border">
      <h4 className="fw-bold mb-4">Deja tu opinión</h4>

      <div className="mb-4 d-flex align-items-center gap-3">
        <span className="fw-semibold">Calificar este artículo:</span>
        <CalificacionEstrellas valor={calificacion} onCambiar={calificar} />
      </div>

      <Form onSubmit={enviar}>
        <Form.Group className="mb-3" controlId="txtComentario">
          <CampoTexto
            as="textarea"
            rows={3}
            placeholder="Escribe tu comentario aquí..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onFocus={requerirLogin}
          />
        </Form.Group>
        <Boton type="submit" variant="primary">
          <Icono nombre="paper-plane" className="me-2" />
          Enviar comentario
        </Boton>
      </Form>

      <div className="mt-5">
        <h5 className="fw-bold border-bottom pb-2 mb-3">Comentarios Recientes</h5>
        {comentarios.length === 0 ? (
          <p className="text-muted small">Sé el primero en comentar.</p>
        ) : (
          comentarios.map((c) => <ComentarioItem key={c.id} comentario={c} />)
        )}
      </div>
    </section>
  )
}
