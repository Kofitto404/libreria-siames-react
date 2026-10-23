export default function SeccionCatalogo({ id, titulo, sub, children }) {
    return (
        <section id={id} className="mb-5" style={{ scrollMarginTop: 96 }}>
            <div className="mb-4 pb-2 border-bottom">
                <h2 className="fw-bold mb-1 text-dark">{titulo}</h2>
                {sub && <p className="text-muted mb-0">{sub}</p>}
            </div>
            {children}
        </section>
    )
}