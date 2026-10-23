import { useState } from 'react'
import { Card, Col, Container, Nav, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import Imagen from '../components/atoms/Imagen'
import FormLogin from '../components/organisms/FormLogin'
import FormRegistro from '../components/organisms/FormRegistro'

const pestanas = [
    { clave: 'login', texto: 'Iniciar sesión' },
    { clave: 'registro', texto: 'Crear cuenta' },
]

export default function Login() {
    const [modo, setModo] = useState('login')
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <div className="bg-light py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={5} md={8}>
                        <Card className="shadow-sm border-0 p-4 p-md-5">
                            <div className="text-center mb-4">
                                <Imagen src="/icon-no-bg.png" alt="Logo Librería Siamés" className="mb-3" style={{ maxWidth: 100 }} />
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
                                <FormLogin onExito={() => navigate(state?.desde ?? '/', { replace: true })} />
                            ) : (
                                <FormRegistro />
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}