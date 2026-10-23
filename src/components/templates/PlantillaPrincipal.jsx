import { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import BarraAnuncios from '../molecules/BarraAnuncios'
import Encabezado from '../organisms/Encabezado'
import PiePagina from '../organisms/PiePagina'

export default function PlantillaPrincipal() {
  const [toast, setToast] = useState('')

  return (
    <>
      <BarraAnuncios />
      <Encabezado />
      <main>
        <Outlet context={{ mostrarToast: setToast }} />
      </main>
      <PiePagina onToast={setToast} />

      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={!!toast} onClose={() => setToast('')} delay={2500} autohide>
          <Toast.Header>
            <strong className="me-auto">Librería Siamés</strong>
            <small>ahora</small>
          </Toast.Header>
          <Toast.Body>{toast}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}