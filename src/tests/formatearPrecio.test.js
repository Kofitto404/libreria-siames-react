import { describe, expect, it } from 'vitest'
import { formatearPrecio } from '../utils/formatearPrecio'

describe('formatearPrecio', () => {
    it('formatea el precio en pesos chilenos con separador de miles', () => {
        expect(formatearPrecio(12000)).toBe('$12.000')
    })
})