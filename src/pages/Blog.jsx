import TituloSeccion from '../components/molecules/TituloSeccion'
import ListaNoticias from '../components/organisms/ListaNoticias'
import { noticias } from '../data/noticias'

export default function Blog() {
  return (
    <>
      <section className="bg-light pt-5 pb-0 border-bottom">
        <TituloSeccion
          titulo="Noticias y Actualidad"
          sub="Novedades literarias, eventos, recomendaciones y cultura pop."
        />
      </section>
      <ListaNoticias noticias={noticias} />
    </>
  )
}
