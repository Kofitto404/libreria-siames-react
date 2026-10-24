import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BadgeNivelStock from '../components/molecules/BadgeNivelStock'

describe('BadgeNivelStock', () => {
    it.each([
        [3, 'Crítico'],
        [8, 'Bajo'],
        [20, 'Óptimo'],
    ])('con stock %i muestra "%s"', (stock, texto) => {
        render(<BadgeNivelStock stock={stock} />)
        expect(screen.getByText(texto)).toBeInTheDocument()
    })
})