import { useState } from 'react'
import { Card, Col, Container, Nav, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import Imagen from '../components/atoms/Imagen'
import FormLogin from '../components/organisms/FormLogin'
import FormRegistro from '../components/organisms/FormRegistro'
import MenuAccesoRapido from '../components/organisms/MenuAccesoRapido'
import { usuariosIniciales } from '../data/usuarios'

const pestanas = [
    { clave: 'login', texto: 'Iniciar sesión' },
    { clave: 'registro', texto: 'Crear cuenta' },
]

const opcionesAcceso = [
    { rol: 'Cliente', correo: 'usuario@gmail.com', icono: 'user' },
    { rol: 'Vendedor', correo: 'vendedor@duoc.cl', icono: 'store' },
    { rol: 'Inventario', correo: 'inventario@duoc.cl', icono: 'boxes-stacked' },
    { rol: 'Compras', correo: 'compras@duoc.cl', icono: 'truck-ramp-box' },
    { rol: 'Admin', correo: 'admin@profesor.duoc.cl', icono: 'user-shield' },
]

export default function Login() {
    const [modo, setModo] = useState('login')
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [autorrelleno, setAutorrelleno] = useState(null)
    const [versionFormulario, setVersionFormulario] = useState(0)
    const navigate = useNavigate()
    const { state } = useLocation()

    const elegirAcceso = (correo) => {
        setAutorrelleno({ correo, password: usuariosIniciales[correo].password })
        setVersionFormulario((v) => v + 1)
        setModo('login')
        setMenuAbierto(false)
    }

    return (
        <div className="bg-light py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={5} md={8}>
                        <Card className="shadow-sm border-0 p-4 p-md-5">
                            <div className="text-center mb-4">
                                <Imagen
                                    src="/icon-no-bg.png"
                                    alt="Logo Librería Siamés"
                                    className="mb-3"
                                    style={{ maxWidth: 100, cursor: 'pointer' }}
                                    onClick={() => setMenuAbierto(true)}
                                />
                                <h2 className="fw-bold text-dark">Mi cuenta</h2>
                            </div>

                            <Nav variant="tabs" justify className="mb-4">
                                {pestanas.map(({ clave, texto }) => (
                                    <Nav.Item key={clave}>
                                        <Nav.Link as="button" active={modo === clave} onClick={() => setModo(clave)} className="w-100 fw-semibold">
                                            {texto}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            {modo === 'login' ? (
                                <FormLogin
                                    key={versionFormulario}
                                    inicial={autorrelleno ?? undefined}
                                    onExito={() => navigate(state?.desde ?? '/', { replace: true })}
                                />
                            ) : (
                                <FormRegistro />
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>

            {menuAbierto && (
                <MenuAccesoRapido
                    opciones={opcionesAcceso}
                    onElegir={elegirAcceso}
                    onCerrar={() => setMenuAbierto(false)}
                />
            )}
        </div>
    )
}