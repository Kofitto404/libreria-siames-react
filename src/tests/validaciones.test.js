import { describe, expect, it } from 'vitest'
import { correoPermitido, esCorreo } from '../utils/validaciones'

describe('esCorreo', () => {
    it('acepta un correo con formato válido', () => {
        expect(esCorreo('persona@ejemplo.cl')).toBe(true)
    })

    it('rechaza un correo sin arroba', () => {
        expect(esCorreo('persona.ejemplo.cl')).toBe(false)
    })
})

describe('correoPermitido', () => {
    it.each(['a@gmail.com', 'a@duoc.cl', 'a@profesor.duoc.cl'])('permite %s', (correo) => {
        expect(correoPermitido(correo)).toBe(true)
    })

    it('rechaza dominios no permitidos', () => {
        expect(correoPermitido('a@hotmail.com')).toBe(false)
    })
})