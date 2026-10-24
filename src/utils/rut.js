const limpiar = (rut) => rut.replace(/[.\-\s]/g, '').toUpperCase()

export const calcularDigitoVerificador = (cuerpo) => {
    let suma = 0
    let multiplo = 2
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += Number(cuerpo[i]) * multiplo
        multiplo = multiplo === 7 ? 2 : multiplo + 1
    }
    const resto = 11 - (suma % 11)
    if (resto === 11) return '0'
    if (resto === 10) return 'K'
    return String(resto)
}

export const rutValido = (rut) => {
    const coincidencia = limpiar(rut).match(/^(\d{7,8})([0-9K])$/)
    if (!coincidencia) return false
    const [, cuerpo, dv] = coincidencia
    return calcularDigitoVerificador(cuerpo) === dv
}