import { Card } from 'react-bootstrap'
import Icono from '../atoms/Icono'

export default function TarjetaInfo({ icono, titulo, texto }) {
  return (
    <Card className="h-100 border-0 shadow-sm text-center p-4">
      <Icono nombre={icono} className="fs-1 text-primary mb-3" />
      <h4 className="fw-bold">{titulo}</h4>
      <p className="text-muted mb-0">{texto}</p>
    </Card>
  )
}
