export const DOMINIOS_PERMITIDOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com']

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const esCorreo = (correo) => regexCorreo.test(correo.trim())

export const correoPermitido = (correo) => {
    const c = correo.trim()
    return esCorreo(c) && DOMINIOS_PERMITIDOS.some((d) => c.endsWith(d))
}