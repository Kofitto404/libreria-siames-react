import { ListGroup, Modal } from 'react-bootstrap'
import Icono from '../atoms/Icono'

export default function MenuAccesoRapido({ opciones, onElegir, onCerrar }) {
    return (
        <Modal show onHide={onCerrar} centered size="sm">
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold fs-6">Acceso rápido</Modal.Title>
            </Modal.Header>
            <ListGroup variant="flush">
                {opciones.map(({ rol, correo, icono }) => (
                    <ListGroup.Item
                        key={correo}
                        action
                        onClick={() => onElegir(correo)}
                        className="d-flex align-items-center gap-2"
                    >
                        <Icono nombre={icono} className="text-primary" />
                        {rol}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Modal>
    )
}