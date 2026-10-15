import Icono from '../atoms/Icono'

export default function BarraAnuncios({ texto = '¡Nueva colección Chilena!' }) {
  return (
    <div className="bg-dark text-white text-center py-2 px-2">
      <p className="mb-0 d-inline-flex align-items-center gap-2">
        <Icono nombre="heart" /> {texto}
      </p>
    </div>
  )
}
