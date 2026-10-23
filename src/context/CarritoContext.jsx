import { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { obtenerLibro } from '../data/libros'

const CarritoContext = createContext(null)

export function useCarrito() {
  const ctx = useContext(CarritoContext)
  if (!ctx) throw new Error('useCarrito debe usarse dentro de <CarritoProvider>')
  return ctx
}

export function CarritoProvider({ children }) {
  const [lineas, setLineas] = useLocalStorage('carrito', [])

  const items = useMemo(
    () =>
      lineas
        .map((l) => ({ ...obtenerLibro(l.id), cantidad: l.cantidad }))
        .filter((i) => i.id !== undefined),
    [lineas],
  )

  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0)
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)

  const agregar = (libro, cantidad = 1) =>
    setLineas((prev) =>
      prev.some((l) => l.id === libro.id)
        ? prev.map((l) => (l.id === libro.id ? { ...l, cantidad: l.cantidad + cantidad } : l))
        : [...prev, { id: libro.id, cantidad }],
    )

  const quitar = (id) => setLineas((prev) => prev.filter((l) => l.id !== id))

  const vaciar = () => setLineas([])

  return (
    <CarritoContext.Provider value={{ items, totalItems, total, agregar, quitar, vaciar }}>
      {children}
    </CarritoContext.Provider>
  )
}