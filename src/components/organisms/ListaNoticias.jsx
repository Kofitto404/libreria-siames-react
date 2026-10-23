import { Container } from 'react-bootstrap'
import TarjetaNoticia from '../molecules/TarjetaNoticia'

export default function ListaNoticias({ noticias }) {
  return (
    <div className="bg-light py-5">
      <Container>
        {noticias.map((n) => (
          <TarjetaNoticia key={n.id} noticia={n} />
        ))}
      </Container>
    </div>
  )
}
