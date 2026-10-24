import GrupoMenuLateral from '../molecules/GrupoMenuLateral'

export default function BarraLateral({ grupos }) {
    return (
        <aside className="position-sticky" style={{ top: 96 }}>
            {grupos.map((grupo) => (
                <GrupoMenuLateral key={grupo.titulo} titulo={grupo.titulo} enlaces={grupo.enlaces} />
            ))}
        </aside>
    )
}