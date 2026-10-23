export default function SeccionTermino({ titulo, children }) {
  return (
    <section className="mb-4">
      <h4 className="fw-bold text-dark mt-4 mb-3">{titulo}</h4>
      <div className="text-muted">{children}</div>
    </section>
  )
}
