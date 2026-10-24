import { describe, expect, it } from 'vitest'
import { fechaHabilTras } from '../utils/fechas'

describe('fechaHabilTras', () => {
    it('suma horas dentro del mismo día hábil', () => {
        const inicio = new Date(2026, 9, 26, 10, 0)
        const resultado = fechaHabilTras(1, inicio)
        expect(resultado.getHours()).toBe(11)
        expect(resultado.getDay()).toBe(1)
    })

    it('omite el fin de semana al contar horas hábiles', () => {
        const inicio = new Date(2026, 9, 23, 23, 0)
        const resultado = fechaHabilTras(1, inicio)
        expect(resultado.getDay()).toBe(1)
        expect(resultado.getHours()).toBe(0)
    })
})