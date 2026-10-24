import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import BadgeNivelStock from './BadgeNivelStock'

export default function FilaStockEditable({ id, titulo, stock, onGuardar }) {
  const [valor, setValor] = useState(stock)
  const [guardado, setGuardado] = useState(false)

  useEffect(() => {
    if (!guardado) return
    const t = setTimeout(() => setGuardado(false), 1500)
    return () => clearTimeout(t)
  }, [guardado])

  const ajustar = (delta) => setValor((v) => Math.max(0, (Number(v) || 0) + delta))

  const guardar = () => {
    const nuevo = parseInt(valor, 10)
    if (Number.isNaN(nuevo) || nuevo < 0) return
    onGuardar(id, nuevo)
    setGuardado(true)
  }

  return (
    <tr>
      <td className="ps-4 fw-semibold text-dark">{titulo}</td>
      <td className="text-center fw-bold fs-5 text-secondary">{stock}</td>
      <td className="text-center">
        <div className="input-group input-group-sm justify-content-center mx-auto" style={{ maxWidth: 200 }}>
          <Boton variant="outline-secondary" className="px-2" aria-label="Restar" onClick={() => ajustar(-1)}>
            <Icono nombre="minus" />
          </Boton>
          <Form.Control
            type="number"
            min={0}
            className="text-center"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <Boton variant="outline-secondary" className="px-2" aria-label="Sumar" onClick={() => ajustar(1)}>
            <Icono nombre="plus" />
          </Boton>
          <Boton variant={guardado ? 'success' : 'primary'} className="px-3" aria-label="Guardar" onClick={guardar}>
            <Icono nombre={guardado ? 'check' : 'floppy-disk'} />
          </Boton>
        </div>
      </td>
      <td className="text-center pe-4">
        <BadgeNivelStock stock={stock} />
      </td>
    </tr>
  )
}
