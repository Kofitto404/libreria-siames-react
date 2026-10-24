import { Table } from 'react-bootstrap'
import BadgeNivelStock from '../molecules/BadgeNivelStock'
import FilaStockEditable from '../molecules/FilaStockEditable'

export default function TablaStock({ productos, editable = false, onGuardar }) {
  const columnas = editable ? 4 : 3

  return (
    <Table responsive hover className="align-middle bg-white shadow-sm rounded mb-0">
      <thead className="table-light text-muted">
        <tr>
          <th className="ps-4 py-3">Producto</th>
          <th className="py-3 text-center">Stock</th>
          {editable && <th className="py-3 text-center">Ajustar</th>}
          <th className="py-3 text-center pe-4">Estado</th>
        </tr>
      </thead>
      <tbody>
        {productos.length === 0 ? (
          <tr>
            <td colSpan={columnas} className="text-center py-5 text-muted">
              No se encontraron productos con ese nombre.
            </td>
          </tr>
        ) : (
          productos.map(({ id, titulo, stock }) =>
            editable ? (
              <FilaStockEditable key={`${id}-${stock}`} id={id} titulo={titulo} stock={stock} onGuardar={onGuardar} />
            ) : (
              <tr key={id}>
                <td className="ps-4 fw-semibold text-dark">{titulo}</td>
                <td className="text-center">
                  {stock} <span className="text-muted small">unidades</span>
                </td>
                <td className="text-center pe-4">
                  <BadgeNivelStock stock={stock} />
                </td>
              </tr>
            ),
          )
        )}
      </tbody>
    </Table>
  )
}
