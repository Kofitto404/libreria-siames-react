import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Inicio from './Inicio.jsx'
import { SesionProvider } from './context/SesionContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SesionProvider>
        <CarritoProvider>
          <Inicio />
        </CarritoProvider>
      </SesionProvider>
    </BrowserRouter>
  </StrictMode>,
)