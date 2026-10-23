import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EncabezadoPagina from '../components/molecules/EncabezadoPagina'
import SeccionTermino from '../components/molecules/SeccionTermino'

export default function Terminos() {
  return (
    <div className="bg-light">
      <EncabezadoPagina titulo="Términos y Condiciones" sub="Última actualización: Septiembre de 2026" />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm border-0 p-4 p-md-5">
              <p className="lead text-secondary mb-5">
                Bienvenido a Librería Siamés. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los
                siguientes términos y condiciones. Te recomendamos leerlos detenidamente antes de realizar cualquier
                transacción.
              </p>

              <SeccionTermino titulo="1. Uso del Sitio Web">
                <p>
                  El contenido de las páginas de este sitio web es para tu información y uso general. Está sujeto a
                  cambios sin previo aviso. Ni nosotros ni ningún tercero garantizamos la exactitud, puntualidad,
                  rendimiento, integridad o idoneidad de la información y los materiales encontrados o ofrecidos en
                  este sitio para cualquier propósito particular.
                </p>
              </SeccionTermino>

              <SeccionTermino titulo="2. Privacidad y Datos Personales">
                <p>
                  Nos comprometemos a proteger la privacidad de nuestros clientes. La información personal
                  proporcionada durante el proceso de registro y compra (como nombre, RUT, dirección y correo
                  electrónico) será utilizada exclusivamente para el procesamiento de pedidos, envíos y comunicaciones
                  directas con el cliente. No compartiremos tus datos con terceros sin tu consentimiento expreso.
                </p>
              </SeccionTermino>

              <SeccionTermino titulo="3. Compras, Precios y Pagos">
                <ul>
                  <li className="mb-2">
                    Todos los precios publicados en el sitio están en Pesos Chilenos (CLP) e incluyen el Impuesto al
                    Valor Agregado (IVA).
                  </li>
                  <li className="mb-2">
                    Nos reservamos el derecho de modificar los precios en cualquier momento, pero los cambios no
                    afectarán a los pedidos que ya hayan sido confirmados.
                  </li>
                  <li className="mb-2">
                    Aceptamos diversos métodos de pago a través de pasarelas seguras. La orden será procesada una vez
                    que el pago haya sido verificado.
                  </li>
                </ul>
              </SeccionTermino>

              <SeccionTermino titulo="4. Envíos y Despachos">
                <p>
                  Realizamos envíos a todo Chile continental. Los tiempos de entrega estimados se indicarán al momento
                  de la compra y dependen de la ubicación del destinatario y del servicio de mensajería asociado.
                  Librería Siamés no se hace responsable por retrasos atribuibles a la empresa de transporte o a
                  factores de fuerza mayor.
                </p>
              </SeccionTermino>

              <SeccionTermino titulo="5. Cambios y Devoluciones">
                <p>
                  De acuerdo con la Ley de Protección al Consumidor, los clientes tienen derecho a solicitar el cambio
                  o la devolución del producto dentro de los 10 días posteriores a la recepción de la compra, siempre
                  y cuando el producto se encuentre en su embalaje original, sin uso y en perfectas condiciones. Las
                  fallas de edición o imprenta están cubiertas por una garantía legal de 6 meses.
                </p>
              </SeccionTermino>

              <SeccionTermino titulo="6. Propiedad Intelectual">
                <p>
                  Este sitio web contiene material de nuestra propiedad o que nos ha sido licenciado. Este material
                  incluye, pero no se limita a, el diseño, la apariencia y los gráficos. Queda prohibida su
                  reproducción sin autorización previa y por escrito de Librería Siamés.
                </p>
              </SeccionTermino>

              <SeccionTermino titulo="7. Contacto">
                <p className="mb-0">
                  Para consultas, reclamos o sugerencias respecto a estos Términos y Condiciones, por favor
                  contáctanos a través de nuestro formulario en la sección de{' '}
                  <Link to="/contacto" className="text-primary text-decoration-none">Contacto</Link> o enviando un
                  correo electrónico a soporte@libreriasiames.cl.
                </p>
              </SeccionTermino>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
