import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const SesionContext = createContext(null)


export function useSesion() {
    const ctx = useContext(SesionContext)
    if (!ctx) throw new Error('useSesion debe usarse dentro de <SesionProvider>')
    return ctx
}

export function SesionProvider({ children }) {
    const [usuario, setUsuario] = useLocalStorage('sesion', null)

    const iniciarSesion = (datos) => setUsuario(datos)
    const cerrarSesion = () => setUsuario(null)

    return (
        <SesionContext.Provider
            value={{ usuario, estaIniciado: usuario !== null, iniciarSesion, cerrarSesion }}
        >
            {children}
        </SesionContext.Provider>
    )
}