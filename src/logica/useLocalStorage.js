import { useState, useEffect } from 'react'

export default function useLocalStorage(clave, inicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado !== null ? JSON.parse(guardado) : inicial
    } catch {
      return inicial
    }
  })

  useEffect(() => {
    try { localStorage.setItem(clave, JSON.stringify(valor)) } catch { /* sin acceso */ }
  }, [clave, valor])

  return [valor, setValor]
}
