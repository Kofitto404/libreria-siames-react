import { useNavigate } from 'react-router-dom'
import Seccion from '../components/molecules/Seccion'
import Banner from '../components/organisms/Banner'
import GrillaCategorias from '../components/organisms/GrillaCategorias'
import GrillaLibros from '../components/organisms/GrillaLibros'
import { useCarrito } from '../context/CarritoContext'
import { categoriasPopulares } from '../data/categorias'
import { librosPorSeccion } from '../data/libros'


// claro alterna el fondo gris/blanco.
const secciones = [
  { clave: 'destacado', titulo: 'Libros Destacados', sub: 'Echa un vistazo a lo más popular de nuestra tienda', claro: false },
  { clave: 'nuevo', titulo: 'Libros Nuevos', sub: 'Recién llegados', claro: true },
  { clave: 'oferta', titulo: 'Últimas Ofertas', sub: 'Libros con precio reducido', claro: false },
]

export default function Home() {
  const navigate = useNavigate()
  const { agregar } = useCarrito()

  return (
    <>
      <Banner textoBoton="Ver productos" onIrInicio={() => navigate('/productos')} />

      {secciones.map(({ clave, titulo, sub, claro }) => (
        <Seccion key={clave} titulo={titulo} sub={sub} claro={claro}>
          <GrillaLibros libros={librosPorSeccion(clave)} onAgregar={agregar} />
        </Seccion>
      ))}

      <Seccion titulo="Categorías populares" sub="Destacadas del último tiempo" claro>
        <GrillaCategorias categorias={categoriasPopulares()} />
      </Seccion>
    </>
  )
}