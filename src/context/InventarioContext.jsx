import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { libros } from '../data/libros'

const inventarioInicial = Object.fromEntries(libros.map((l) => [l.id, l.stock]))

const InventarioContext = createContext(null)

export function useInventario() {
    const ctx = useContext(InventarioContext)
    if (!ctx) throw new Error('useInventario debe usarse dentro de <InventarioProvider>')
    return ctx
}

export function InventarioProvider({ children }) {
    const [stock, setStock] = useLocalStorage('BD_INVENTARIO', inventarioInicial)

    const stockDe = (id) => stock[id] ?? 0

    const descontar = (items) =>
        setStock((prev) => {
            const siguiente = { ...prev }
            items.forEach(({ id, cantidad }) => {
                siguiente[id] = Math.max(0, (siguiente[id] ?? 0) - cantidad)
            })
            return siguiente
        })

    return (
        <InventarioContext.Provider value={{ stockDe, descontar }}>
            {children}
        </InventarioContext.Provider>
    )
}