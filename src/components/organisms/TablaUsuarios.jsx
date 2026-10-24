import { Table } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import { BADGE_ROL, ETIQUETAS_ROL } from '../../utils/roles'

export default function TablaUsuarios({ usuarios, correoActual, onEditar, onEliminar }) {
  return (
    <Table responsive hover className="align-middle bg-white shadow-sm rounded mb-0">
      <thead className="table-light text-muted">
        <tr>
          <th className="ps-4 py-3">ID</th>
          <th className="py-3">Nombres</th>
          <th className="py-3">Correo</th>
          <th className="py-3 text-center">Rol</th>
          <th className="py-3 text-center pe-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(usuarios).map(([correo, u]) => (
          <tr key={correo}>
            <td className="ps-4 fw-bold text-muted">#{u.id}</td>
            <td className="fw-medium">{u.nombres} {u.apellidos}</td>
            <td>{correo}</td>
            <td className="text-center">
              <span className={`badge ${BADGE_ROL[u.tipo] ?? 'bg-secondary'}`}>
                {ETIQUETAS_ROL[u.tipo] ?? u.tipo.toUpperCase()}
              </span>
            </td>
            <td className="text-center pe-4">
              <Boton size="sm" variant="outline-dark" className="me-1" aria-label="Editar" onClick={() => onEditar(correo)}>
                <Icono nombre="pen" />
              </Boton>
              <Boton
                size="sm"
                variant="outline-danger"
                aria-label="Eliminar"
                disabled={correo === correoActual}
                title={correo === correoActual ? 'No puedes eliminarte a ti mismo' : 'Eliminar usuario'}
                onClick={() => onEliminar(correo)}
              >
                <Icono nombre="trash" />
              </Boton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
