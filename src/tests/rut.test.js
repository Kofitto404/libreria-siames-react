import { describe, expect, it } from 'vitest'
import { calcularDigitoVerificador, rutValido } from '../utils/rut'

describe('calcularDigitoVerificador', () => {
    it('calcula el dígito verificador numérico', () => {
        expect(calcularDigitoVerificador('12345678')).toBe('5')
    })

    it('devuelve K cuando el resto es 10', () => {
        expect(calcularDigitoVerificador('10000013')).toBe('K')
    })

    it('devuelve 0 cuando el resto es 11', () => {
        expect(calcularDigitoVerificador('10000004')).toBe('0')
    })
})

describe('rutValido', () => {
    it.each(['12.345.678-5', '12345678-5', '11.111.111-1'])('acepta %s', (rut) => {
        expect(rutValido(rut)).toBe(true)
    })

    it('rechaza un dígito verificador incorrecto', () => {
        expect(rutValido('12.345.678-6')).toBe(false)
    })

    it('rechaza un formato inválido', () => {
        expect(rutValido('abc')).toBe(false)
        expect(rutValido('77751234')).toBe(false)
    })
})