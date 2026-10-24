import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import FormLogin from '../components/organisms/FormLogin'
import { SesionProvider } from '../context/SesionContext'

const renderizar = (onExito = vi.fn()) =>
    render(
        <SesionProvider>
            <FormLogin onExito={onExito} />
        </SesionProvider>,
    )

const escribir = (etiqueta, valor) =>
    fireEvent.change(screen.getByLabelText(etiqueta), { target: { value: valor } })

describe('FormLogin', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('muestra un error con credenciales incorrectas', () => {
        renderizar()
        escribir(/correo electrónico/i, 'usuario@gmail.com')
        escribir(/contraseña/i, 'incorrecta')
        fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }))
        expect(screen.getByText(/credenciales incorrectas/i)).toBeInTheDocument()
    })

    it('llama a onExito con credenciales válidas', () => {
        const onExito = vi.fn()
        renderizar(onExito)
        escribir(/correo electrónico/i, 'usuario@gmail.com')
        escribir(/contraseña/i, 'usuario')
        fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }))
        expect(onExito).toHaveBeenCalledTimes(1)
    })

    it('muestra validación si el correo no es válido', () => {
        renderizar()
        escribir(/correo electrónico/i, 'no-es-correo')
        fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }))
        expect(screen.getByText(/correo válido/i)).toBeInTheDocument()
    })
})