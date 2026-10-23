import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Icono from '../components/atoms/Icono'
import FormPago from '../components/organisms/FormPago'
import ResumenCompra from '../components/organisms/ResumenCompra'
import { useCarrito } from '../context/CarritoContext'
import { useInventario } from '../context/InventarioContext'
import { useSesion } from '../context/SesionContext'
import useLocalStorage from '../hooks/useLocalStorage'
import { fechaHabilTras, formatearFecha } from '../utils/fechas'
import { formatearPrecio } from '../utils/formatearPrecio'

const UMBRAL_ENVIO_GRATIS = 30000
const COSTO_ENVIO = 2000
const HORAS_HABILES_ENTREGA = 48

export default function Pago() {
    const { estaIniciado, usuario } = useSesion()
    const { items, total, vaciar } = useCarrito()
    const { descontar } = useInventario()
    const [pedidos, setPedidos] = useLocalStorage('pedidosPersonalizados', {})
    const [entrega, setEntrega] = useState('retiro')
    const [direccion, setDireccion] = useState(usuario?.direccion ?? '')
    const [errorDireccion, setErrorDireccion] = useState(false)
    const [ordenConfirmada, setOrdenConfirmada] = useState(null)
    const [fechaEstimada] = useState(() => fechaHabilTras(HORAS_HABILES_ENTREGA))

    if (!estaIniciado) {
        return <Navigate to="/login" replace state={{ desde: '/pago' }} />
    }
    if (!ordenConfirmada && items.length === 0) {
        return <Navigate to="/carrito" replace />
    }

    const envioGratis = total >= UMBRAL_ENVIO_GRATIS
    const costoEnvio = entrega === 'envio' && !envioGratis ? COSTO_ENVIO : 0
    const envioTexto =
        entrega === 'retiro'
            ? '$0 (Retiro en tienda)'
            : envioGratis
                ? '¡Gratis! (Compra mayor a $30.000)'
                : `${formatearPrecio(COSTO_ENVIO)} CLP`

    const confirmarPago = (e) => {
        e.preventDefault()
        if (entrega === 'envio' && !direccion.trim()) {
            setErrorDireccion(true)
            return
        }

        const id = `ORD-${Math.floor(1000 + Math.random() * 9000)}`
        const fechaTexto = formatearFecha(fechaEstimada)
        const pedido = {
            id,
            fecha: new Date().toLocaleDateString('es-CL'),
            estado: 'En pedido',
            items: items.map(({ titulo, cantidad }) => ({ nombre: titulo, cantidad })),
            detalle:
                entrega === 'envio'
                    ? `Envío a domicilio. Fecha estimada de entrega: ${fechaTexto}`
                    : `Retiro en tienda seleccionado. Fecha estimada de retiro: ${fechaTexto}`,
        }

        setPedidos((prev) => ({ ...prev, [usuario.id]: [pedido, ...(prev[usuario.id] ?? [])] }))
        descontar(items)
        vaciar()
        setOrdenConfirmada(id)
    }

    if (ordenConfirmada) {
        return (
            <Container className="py-5 text-center">
                <Icono nombre="circle-check" className="text-success fs-1 mb-3" />
                <h2 className="fw-bold mb-2">¡Pedido {ordenConfirmada} registrado con éxito!</h2>
                <p className="text-muted mb-4">Fecha estimada: {formatearFecha(fechaEstimada)}</p>
                <Boton as={Link} to="/" variant="primary">Volver a la tienda</Boton>
            </Container>
        )
    }

    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-4">Finalizar compra</h2>
            <Row className="g-4">
                <Col lg={7}>
                    <Card className="shadow-sm border-0 p-4">
                        <FormPago
                            entrega={entrega}
                            onEntregaChange={setEntrega}
                            direccion={direccion}
                            onDireccionChange={(valor) => {
                                setDireccion(valor)
                                setErrorDireccion(false)
                            }}
                            errorDireccion={errorDireccion}
                            onSubmit={confirmarPago}
                        />
                    </Card>
                </Col>
                <Col lg={5}>
                    <ResumenCompra
                        subtotal={total}
                        envioTexto={envioTexto}
                        totalFinal={total + costoEnvio}
                        fechaEstimada={formatearFecha(fechaEstimada)}
                    />
                </Col>
            </Row>
        </Container>
    )
}