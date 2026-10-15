import { Container } from 'react-bootstrap'
import TituloSeccion from './TituloSeccion'

export default function Seccion({ id, titulo, sub, rn, claro = false, children }) {
  return (
    <section id={id} className={`py-5 ${claro ? 'bg-light' : ''}`}>
      <Container>
        {titulo && <TituloSeccion titulo={titulo} sub={sub} rn={rn} />}
        {children}
      </Container>
    </section>
  )
}
