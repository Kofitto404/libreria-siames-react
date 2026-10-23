export default function Precio({ valor, antes }) {
    return (
        <div className="d-flex align-items-center mb-3">
            <span className="text-primary fw-bold">${valor.toLocaleString('es-CL')}</span>
            {antes && <span className="text-muted text-decoration-line-through small ms-2">${antes.toLocaleString('es-CL')}</span>}
        </div>
    )
}