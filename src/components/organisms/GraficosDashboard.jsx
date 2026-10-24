import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import { Card, Col, Row } from 'react-bootstrap'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const rentabilidad = {
  labels: ['Catan', 'Root', '1984', 'Hábitos Atómicos', 'El Arte de la Guerra'],
  data: [120000, 95000, 45000, 60000, 30000],
}

const ventasCategoria = {
  labels: ['Juegos de Mesa', 'Literatura', 'Autoayuda', 'Comics/Manga'],
  data: [45, 30, 15, 10],
  colores: ['#769fcb', '#a4de87', '#f9e6ae', '#d9a5cc'],
}

const opciones = { responsive: true, maintainAspectRatio: false }

export default function GraficosDashboard() {
  return (
    <Row className="g-4">
      <Col lg={7}>
        <Card className="shadow-sm border-0 h-100">
          <Card.Body>
            <h6 className="fw-bold text-muted">Rentabilidad por título</h6>
            <div style={{ height: 300 }}>
              <Bar
                options={opciones}
                data={{
                  labels: rentabilidad.labels,
                  datasets: [
                    {
                      label: 'Margen de ganancia (CLP)',
                      data: rentabilidad.data,
                      backgroundColor: 'rgba(54, 162, 235, 0.6)',
                      borderColor: 'rgba(54, 162, 235, 1)',
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={5}>
        <Card className="shadow-sm border-0 h-100">
          <Card.Body>
            <h6 className="fw-bold text-muted">Ventas por categoría</h6>
            <div style={{ height: 300 }}>
              <Doughnut
                options={opciones}
                data={{
                  labels: ventasCategoria.labels,
                  datasets: [{ data: ventasCategoria.data, backgroundColor: ventasCategoria.colores }],
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
