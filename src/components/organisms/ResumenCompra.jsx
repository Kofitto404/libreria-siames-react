import { Card } from 'react-bootstrap'
import { formatearPrecio } from '../../utils/formatearPrecio'

export default function ResumenCompra({ subtotal, envioTexto, totalFinal, fechaEstimada }) {
    return (
        <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Resumen de compra</h5>
                <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>{formatearPrecio(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span>Envío</span>
                    <span>{envioTexto}</span>
                </div>
                <p className="small text-muted mb-3">Fecha estimada: {fechaEstimada}</p>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span className="text-primary">{formatearPrecio(totalFinal)}</span>
                </div>
            </Card.Body>
        </Card>
    )
}