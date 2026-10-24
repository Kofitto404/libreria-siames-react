import { Card } from 'react-bootstrap'

export default function TarjetaEstadistica({ titulo, valor, variante }) {
  return (
    <Card className={`shadow-sm border-0 h-100 bg-${variante} text-white`}>
      <Card.Body>
        <h6 className="text-uppercase fw-bold opacity-75">{titulo}</h6>
        <h2 className="fw-bold mb-0">{valor}</h2>
      </Card.Body>
    </Card>
  )
}
