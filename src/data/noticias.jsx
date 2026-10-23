import macu from '../assets/images/blog/macu.jpg'
import fabulousBeasts from '../assets/images/blog/fabulous_beasts.jpg'

export const noticias = [
  {
    id: 'gato-escritor',
    titulo: 'Gato escritor',
    categoria: { texto: 'Curiosidades', bg: 'primary' },
    fecha: 'Septiembre 2026',
    imagen: macu,
    resumen:
      'La impresionante historia de Macu, un gato que a los 6 o 7 meses inspiró y protagonizó su primer libro ilustrado de aventuras cotidianas.',
    contenido: (
      <>
        <p>
          Macu fue adoptado durante un frío invierno y desde sus primeras semanas mostró una fijación inusual por
          sentarse sobre cuadernos abiertos, teclados y pilas de novelas clásicas.
        </p>
        <p>
          Lo que empezó como fotos divertidas capturadas por sus dueños terminó convirtiéndose en{' '}
          <em>Las Crónicas de Macu</em>, un libro que recopila pequeñas reflexiones ilustradas desde la perspectiva
          felina, abordando temas de amistad, curiosidad y la vida hogareña.
        </p>
        <blockquote className="blockquote border-start border-primary border-3 ps-3 my-3">
          <p className="fs-6 fst-italic text-muted">
            "No camina sobre las páginas por casualidad; Macu supervisa personalmente cada párrafo publicado en la
            librería."
          </p>
        </blockquote>
        <p>El libro ya se encuentra disponible en preventa especial con marcapáginas coleccionable incluido.</p>
      </>
    ),
  },
  {
    id: 'sibuxiang-y-tianlu',
    titulo: 'Sibuxiang y Tianlu',
    categoria: { texto: 'Cómics & Manhua', bg: 'info', claseTexto: 'text-white' },
    fecha: 'Septiembre 2026',
    imagen: fabulousBeasts,
    resumen:
      'Esperanza para los fans: confirman el regreso de la publicación seriada de You Shou Yan (有兽焉) tras dos años de pausa editorial con nuevos arcos argumentales.',
    contenido: (
      <>
        <p>
          Tras una prolongada espera de casi dos años sin nuevas entregas periódicas, el equipo detrás del popular
          manhua mitológico <strong>You Shou Yan (Fabulous Beasts)</strong> confirmó oficialmente la reanudación
          regular de las aventuras de Sibuxiang, Tianlu, Bixie y las demás criaturas legendarias.
        </p>
        <p>
          El comunicado reveló que el nuevo ciclo profundizará en los orígenes de Tianlu y su relación con el mundo
          contemporáneo, además de preparar ediciones físicas de lujo con material inédito y bocetos conceptuales.
        </p>
        <div className="alert alert-light border mt-3">
          La saga continuará publicándose de manera digital y contará con volúmenes recopilatorios que pronto
          llegarán a nuestra sección de importaciones.
        </div>
      </>
    ),
  },
]

export const noticiaPorId = (id) => noticias.find((n) => n.id === id)
