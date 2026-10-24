import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { usuariosIniciales } from '../data/usuarios'

const SesionContext = createContext(null)

export function useSesion() {
  const ctx = useContext(SesionContext)
  if (!ctx) throw new Error('useSesion debe usarse dentro de <SesionProvider>')
  return ctx
}

export function SesionProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage('sesion', null)
  const [usuarios, setUsuarios] = useLocalStorage('BD_USUARIOS', usuariosIniciales)

  const iniciarSesion = (correo, password) => {
    const encontrado = usuarios[correo]
    if (!encontrado || encontrado.password !== password) return false
    setUsuario({
      id: encontrado.id,
      correo,
      tipo: encontrado.tipo,
      nombres: encontrado.nombres,
      apellidos: encontrado.apellidos,
      direccion: encontrado.direccion,
    })
    return true
  }

  const registrarUsuario = (correo, datos) => {
    if (usuarios[correo]) return null
    const id = Math.max(0, ...Object.values(usuarios).map((u) => u.id)) + 1
    setUsuarios({ ...usuarios, [correo]: { id, tipo: 'usuario', ...datos } })
    return id
  }

  const actualizarUsuario = (correoOriginal, cambios) => {
    const { correo: nuevoCorreo, ...resto } = cambios
    if (nuevoCorreo !== correoOriginal && usuarios[nuevoCorreo]) return false
    const siguiente = { ...usuarios }
    const actual = siguiente[correoOriginal]
    delete siguiente[correoOriginal]
    siguiente[nuevoCorreo] = { ...actual, ...resto }
    setUsuarios(siguiente)
    return true
  }

  const eliminarUsuario = (correo) => {
    const siguiente = { ...usuarios }
    delete siguiente[correo]
    setUsuarios(siguiente)
  }

  const cerrarSesion = () => setUsuario(null)

  return (
    <SesionContext.Provider
      value={{
        usuario,
        usuarios,
        estaIniciado: usuario !== null,
        iniciarSesion,
        registrarUsuario,
        actualizarUsuario,
        eliminarUsuario,
        cerrarSesion,
      }}
    >
      {children}
    </SesionContext.Provider>
  )
}
