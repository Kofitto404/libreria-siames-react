import { Container } from 'react-bootstrap'

export default function EncabezadoPagina({ titulo, sub }) {
  return (
    <section className="bg-primary text-white py-5 text-center">
      <Container>
        <h1 className="fw-bold display-5 mb-2">{titulo}</h1>
        {sub && <p className="lead mb-0">{sub}</p>}
      </Container>
    </section>
  )
}
