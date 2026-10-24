import { useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import CampoFormulario from '../molecules/CampoFormulario'
import { useSesion } from '../../context/SesionContext'
import { esCorreo } from '../../utils/validaciones'

export default function FormLogin({ onExito, inicial = { correo: '', password: '' } }) {
    const { iniciarSesion } = useSesion()
    const [valores, setValores] = useState(inicial)
    const [errores, setErrores] = useState({})
    const [errorGeneral, setErrorGeneral] = useState('')

    const cambiar = (campo) => (e) => {
        setValores((v) => ({ ...v, [campo]: e.target.value }))
        setErrores((er) => ({ ...er, [campo]: undefined }))
        setErrorGeneral('')
    }

    const enviar = (e) => {
        e.preventDefault()
        const nuevos = {}
        if (!esCorreo(valores.correo)) nuevos.correo = 'Ingresa un correo válido.'
        if (!valores.password.trim()) nuevos.password = 'La contraseña es obligatoria.'
        setErrores(nuevos)
        if (Object.keys(nuevos).length > 0) return

        if (iniciarSesion(valores.correo.trim(), valores.password.trim())) {
            onExito()
        } else {
            setErrorGeneral('Credenciales incorrectas. Verifique correo y contraseña.')
        }
    }

    return (
        <>
            {errorGeneral && <Alert variant="danger">{errorGeneral}</Alert>}

            <Form onSubmit={enviar} noValidate>
                <CampoFormulario
                    id="loginCorreo"
                    etiqueta="Correo electrónico"
                    type="email"
                    maxLength={100}
                    value={valores.correo}
                    onChange={cambiar('correo')}
                    error={errores.correo}
                />

                <CampoFormulario
                    id="loginPassword"
                    etiqueta="Contraseña"
                    type="password"
                    value={valores.password}
                    onChange={cambiar('password')}
                    error={errores.password}
                />

                <Boton type="submit" variant="primary" className="w-100 py-2 fw-bold mt-2">
                    <Icono nombre="right-to-bracket" className="me-2" />
                    Iniciar sesión
                </Boton>
            </Form>
        </>
    )
}