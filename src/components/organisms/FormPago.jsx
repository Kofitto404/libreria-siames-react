import { Form } from 'react-bootstrap'
import Boton from '../atoms/Boton'
import Icono from '../atoms/Icono'
import CampoFormulario from '../molecules/CampoFormulario'

export default function FormPago({
    entrega,
    onEntregaChange,
    direccion,
    onDireccionChange,
    errorDireccion,
    onSubmit,
}) {
    return (
        <Form onSubmit={onSubmit} noValidate>
            <h5 className="fw-bold mb-3">Tipo de entrega</h5>

            <Form.Check
                type="radio"
                id="retiroTienda"
                name="tipoEntrega"
                label="Retiro en tienda"
                checked={entrega === 'retiro'}
                onChange={() => onEntregaChange('retiro')}
                className="fw-semibold mb-2"
            />
            <Form.Check
                type="radio"
                id="envioDomicilio"
                name="tipoEntrega"
                label="Envío a domicilio"
                checked={entrega === 'envio'}
                onChange={() => onEntregaChange('envio')}
                className="fw-semibold mb-3"
            />

            {entrega === 'envio' && (
                <CampoFormulario
                    id="direccionEnvio"
                    etiqueta="Dirección de despacho *"
                    as="textarea"
                    rows={2}
                    value={direccion}
                    onChange={(e) => onDireccionChange(e.target.value)}
                    error={errorDireccion ? 'La dirección de despacho es obligatoria.' : undefined}
                />
            )}

            <Boton type="submit" variant="primary" className="w-100 py-3 fw-bold fs-5 mt-3">
                <Icono nombre="lock" className="me-2" />
                Confirmar y pagar
            </Boton>
        </Form>
    )
}