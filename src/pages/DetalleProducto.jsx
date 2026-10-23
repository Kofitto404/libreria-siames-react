import { useNavigate } from 'react-router-dom'
import Banner from '../components/organisms/Banner'
import Encabezado from '../components/organisms/Encabezado'

function App() {
    const navigate = useNavigate()
    const nombre = 'Usuario' /* TODO: Hacer que sea un get, si esta vacio cambiar a "! */

    return (
        <>
            <Encabezado
                nombre={nombre || "Registrarse"}
            />
            <Banner
                nombre={nombre}
                onIrInicio={() => navigate('/miau')}
            />
        </>
    )
}

export default App
