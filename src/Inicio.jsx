import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home irA={(destino) => navigate(`/${destino}`)} />} />
    </Routes>
  )
}
