export const fechaHabilTras = (horasHabiles, desde = new Date()) => {
    const fecha = new Date(desde)
    let restantes = horasHabiles
    while (restantes > 0) {
        fecha.setHours(fecha.getHours() + 1)
        const dia = fecha.getDay()
        if (dia !== 0 && dia !== 6) restantes--
    }
    return fecha
}

export const formatearFecha = (fecha) =>
    fecha.toLocaleString('es-CL', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })