import { useNavigate } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Banner from '../components/organisms/Banner'
import Seccion from '../components/molecules/Seccion'
import { useCarrito } from '../context/CarritoContext'
import { libros } from '../data/libros'

export default function Home() {
    const navigate = useNavigate()
    const { agregar } = useCarrito()

    return (
        <>
            <Banner textoBoton="Ver productos" onIrInicio={() => navigate('/productos')} />

            <Seccion titulo="Prueba del carrito" sub="Haz clic y mira el contador del encabezado">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    {libros.slice(0, 4).map((libro) => (
                        <Boton
                            key={libro.id}
                            onClick={() => {
                                agregar(libro)
                            }}
                        >
                            + {libro.titulo}
                        </Boton>
                    ))}
                </div>
            </Seccion>
        </>
    )
}