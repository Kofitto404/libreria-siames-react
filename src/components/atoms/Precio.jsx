import { formatearPrecio } from '../../utils/formatearPrecio'

export default function Precio({ valor, antes }) {
    return (
        <div className="d-flex align-items-center mb-3">
            <span className="text-primary fw-bold">{formatearPrecio(valor)}</span>
            {antes && (
                <span className="text-muted text-decoration-line-through small ms-2">
                    {formatearPrecio(antes)}
                </span>
            )}
        </div>
    )
}