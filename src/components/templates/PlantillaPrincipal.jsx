import { Toast, ToastContainer } from 'react-bootstrap'
import BarraAnuncios from '../molecules/BarraAnuncios'
import Encabezado from '../organisms/Encabezado'
import PiePagina from '../organisms/PiePagina'

export default function PlantillaPrincipal({ nombre, carrito, toast, onCerrarToast, onToast, onNavegar, children }) {
  return (
    <>
      <BarraAnuncios />
      <Encabezado nombre={nombre} carrito={carrito} onNavegar={onNavegar} />
      <main>{children}</main>
      <PiePagina onNavegar={onNavegar} onToast={onToast} />

      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={!!toast} onClose={onCerrarToast} delay={2500} autohide>
          <Toast.Header><strong className="me-auto">Mi Librería</strong><small>ahora</small></Toast.Header>
          <Toast.Body>{toast}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}
