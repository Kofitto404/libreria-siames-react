import { useState } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import CampoFormulario from '../molecules/CampoFormulario'
import { useSesion } from '../../context/SesionContext'
import { correoPermitido, DOMINIOS_PERMITIDOS } from '../../utils/validaciones'
import { rutValido } from '../../utils/rut'

const inicial = {
    nombres: '',
    apellidos: '',
    rut: '',
    direccion: '',
    sexo: '',
    correo: '',
    password: '',
    confirmar: '',
}

function validar(v) {
    const errores = {}
    if (!v.nombres.trim()) errores.nombres = 'Los nombres son obligatorios.'
    if (!v.apellidos.trim()) errores.apellidos = 'Los apellidos son obligatorios.'
    if (!v.rut.trim()) errores.rut = 'El RUT es obligatorio.'
    else if (!rutValido(v.rut)) errores.rut = 'El RUT no es válido.'
    if (!v.direccion.trim()) errores.direccion = 'La dirección es obligatoria.'
    if (!correoPermitido(v.correo)) {
        errores.correo = `El correo es obligatorio y debe pertenecer a ${DOMINIOS_PERMITIDOS.join(', ')}.`
    }
    const largo = v.password.trim().length
    if (largo < 4 || largo > 10) errores.password = 'La contraseña debe tener entre 4 y 10 caracteres.'
    if (v.confirmar !== v.password || v.confirmar === '') errores.confirmar = 'Las contraseñas no coinciden.'
    return errores
}

export default function FormRegistro() {
    const { registrarUsuario } = useSesion()
    const [valores, setValores] = useState(inicial)
    const [errores, setErrores] = useState({})
    const [idCreado, setIdCreado] = useState(null)

    const cambiar = (campo) => (e) => {
        setValores((v) => ({ ...v, [campo]: e.target.value }))
        setErrores((er) => ({ ...er, [campo]: undefined }))
        setIdCreado(null)
    }

    const enviar = (e) => {
        e.preventDefault()
        const nuevos = validar(valores)
        setErrores(nuevos)
        if (Object.keys(nuevos).length > 0) return

        const id = registrarUsuario(valores.correo.trim(), {
            nombres: valores.nombres.trim(),
            apellidos: valores.apellidos.trim(),
            rut: valores.rut.trim(),
            direccion: valores.direccion.trim(),
            sexo: valores.sexo,
            password: valores.password.trim(),
        })

        if (id === null) {
            setErrores({ correo: 'Este correo electrónico ya se encuentra registrado.' })
            return
        }
        setIdCreado(id)
        setValores(inicial)
    }

    return (
        <>
            {idCreado && (
                <Alert variant="success">
                    Cuenta creada correctamente. Tu ID de cliente es #{idCreado}. Ahora puedes iniciar sesión.
                </Alert>
            )}

            <Form onSubmit={enviar} noValidate>
                <Row>
                    <Col md={6}>
                        <CampoFormulario id="nombres" etiqueta="Nombres *" value={valores.nombres} onChange={cambiar('nombres')} error={errores.nombres} />
                    </Col>
                    <Col md={6}>
                        <CampoFormulario id="apellidos" etiqueta="Apellidos *" value={valores.apellidos} onChange={cambiar('apellidos')} error={errores.apellidos} />
                    </Col>
                    <Col md={6}>
                        <CampoFormulario id="rut" etiqueta="RUT *" placeholder="12.345.678-9" value={valores.rut} onChange={cambiar('rut')} error={errores.rut} />
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="sexo">
                            <Form.Label className="fw-semibold">Sexo</Form.Label>
                            <Form.Select value={valores.sexo} onChange={cambiar('sexo')}>
                                <option value="">Prefiero no indicar</option>
                                <option value="femenino">Femenino</option>
                                <option value="masculino">Masculino</option>
                                <option value="otro">Otro</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <CampoFormulario
                    id="direccion"
                    etiqueta="Dirección *"
                    as="textarea"
                    rows={2}
                    value={valores.direccion}
                    onChange={cambiar('direccion')}
                    error={errores.direccion}
                />

                <CampoFormulario
                    id="registroCorreo"
                    etiqueta="Correo electrónico *"
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    value={valores.correo}
                    onChange={cambiar('correo')}
                    error={errores.correo}
                />

                <Row>
                    <Col md={6}>
                        <CampoFormulario id="registroPassword" etiqueta="Contraseña *" type="password" value={valores.password} onChange={cambiar('password')} error={errores.password} />
                    </Col>
                    <Col md={6}>
                        <CampoFormulario id="confirmarPassword" etiqueta="Repetir contraseña *" type="password" value={valores.confirmar} onChange={cambiar('confirmar')} error={errores.confirmar} />
                    </Col>
                </Row>

                <Boton type="submit" variant="primary" className="w-100 py-2 fw-bold mt-2">
                    <Icono nombre="user-plus" className="me-2" />
                    Crear cuenta
                </Boton>
            </Form>
        </>
    )
}