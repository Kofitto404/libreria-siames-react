export default function TextoBanner({ titulo, texto }) {
  return (
    <div className="bg-dark.bg-gradient">
      <h1 className="display-5 fw-bold mb-3 ">{titulo}</h1>
      <p className="lead mb-0">{texto}</p>
    </div>
  )
}
