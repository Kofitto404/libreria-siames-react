export default function TituloSeccion({ titulo, sub, rn }) {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold">{titulo}</h2>
      {sub && <p className="text-muted mb-0">{sub}</p>}
      {rn && <span className="badge text-bg-light border mt-2 fw-normal">React Native: {rn}</span>}
    </div>
  )
}
