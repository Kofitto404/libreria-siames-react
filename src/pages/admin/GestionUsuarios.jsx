import { useState } from 'react'
import PlantillaPanel from '../../components/templates/PlantillaPanel'
import ModalEditarUsuario from '../../components/organisms/ModalEditarUsuario'
import TablaUsuarios from '../../components/organisms/TablaUsuarios'
import { useSesion } from '../../context/SesionContext'

export default function GestionUsuarios() {
  const { usuario, usuarios, actualizarUsuario, eliminarUsuario } = useSesion()
  const [editando, setEditando] = useState(null)

  const borrar = (correo) => {
    if (window.confirm(`¿Estás seguro de eliminar permanentemente al usuario ${correo}?`)) {
      eliminarUsuario(correo)
    }
  }

  const guardar = (correoOriginal, cambios) => {
    const ok = actualizarUsuario(correoOriginal, cambios)
    if (ok) setEditando(null)
    return ok
  }

  return (
    <PlantillaPanel titulo="Gestión de usuarios">
      <TablaUsuarios
        usuarios={usuarios}
        correoActual={usuario.correo}
        onEditar={setEditando}
        onEliminar={borrar}
      />
      {editando && (
        <ModalEditarUsuario
          key={editando}
          correo={editando}
          usuario={usuarios[editando]}
          onGuardar={guardar}
          onCerrar={() => setEditando(null)}
        />
      )}
    </PlantillaPanel>
  )
}
