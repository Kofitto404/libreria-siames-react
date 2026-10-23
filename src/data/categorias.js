// popular: true --> aparece en "Categorías populares" del Home (necesita img).

import imgNovela from '../assets/images/categories/novela.jpg'
import imgFantasia from '../assets/images/categories/fantasia.jpg'
import imgInfantiles from '../assets/images/categories/infantiles.png'

export const categorias = [
    { id: 'novela', nombre: 'Novela', img: imgNovela, popular: true },
    { id: 'fantasia', nombre: 'Fantasía', img: imgFantasia, popular: true },
    { id: 'infantiles', nombre: 'Infantiles', img: imgInfantiles, popular: true },
    { id: 'ciencia', nombre: 'Ciencia' },
    { id: 'filosofico', nombre: 'Filosófico' },
    { id: 'gastronomia', nombre: 'Gastronomía' },
    { id: 'cuentos', nombre: 'Cuentos' },
    { id: 'academico', nombre: 'Académico' },
    { id: 'autoayuda', nombre: 'Autoayuda' },
    { id: 'chilenos', nombre: 'Chilenos' },
    { id: 'juegos-de-mesa', nombre: 'Juegos de Mesa' },
]

export const categoriasPopulares = () => categorias.filter((c) => c.popular)