import imgPrincipito from '../assets/images/covers/el_principito.jpeg'
import imgCasaEspiritus from '../assets/images/covers/La Casa de los Espíritus.png'
import imgFundamentos from '../assets/images/covers/Fundamentos de Programación.png'
import imgHabitos from '../assets/images/covers/Hábitos Atómicos.png'
import imgHobbit from '../assets/images/covers/El Hobbit.png'
import imgCienciaCocina from '../assets/images/covers/La Ciencia de la Cocina.png'
import imgVuelta80Dias from '../assets/images/covers/La Vuelta Al Mundo En 80 Dias.png'
import imgArteGuerra from '../assets/images/covers/El arte de la guerra.png'
import img1984 from '../assets/images/covers/1984.png'
import imgSubterra from '../assets/images/covers/subterra.png'
import imgAbejas from '../assets/images/covers/Abejas - Una Guía Para Curiosos.png'
import imgNepal from '../assets/images/covers/Nepal - Panda Rojo.png'

import imgRoot from '../assets/images/games/root.jpg'
import imgCatan from '../assets/images/games/catan.png'
import imgUno from '../assets/images/games/uno.png'

export const libros = [
    // ───────────── Destacados ─────────────
    {
        id: 1,
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        categoria: 'Infantiles',
        categoriaId: 'infantiles',
        tipo: 'libro',
        precio: 12000,
        img: imgPrincipito,
        seccion: 'destacado',
        chileno: false,
        stock: 50,
    },
    {
        id: 2,
        titulo: 'La Casa de los Espíritus',
        autor: 'Isabel Allende',
        categoria: 'Novela',
        categoriaId: 'novela',
        tipo: 'libro',
        precio: 18000,
        img: imgCasaEspiritus,
        seccion: 'destacado',
        chileno: true,
        stock: 12,
    },
    {
        id: 3,
        titulo: 'Fundamentos de Programación',
        autor: 'Luis Miguel López',
        categoria: 'Académico',
        categoriaId: 'academico',
        tipo: 'libro',
        precio: 35000,
        img: imgFundamentos,
        seccion: 'destacado',
        chileno: false,
        stock: 5,
    },
    {
        id: 4,
        titulo: 'Hábitos Atómicos',
        autor: 'James Clear',
        categoria: 'Autoayuda',
        categoriaId: 'autoayuda',
        tipo: 'libro',
        precio: 22000,
        img: imgHabitos,
        seccion: 'destacado',
        chileno: false,
        stock: 37,
    },

    // ───────────── Nuevos ─────────────
    {
        id: 5,
        titulo: 'El Hobbit',
        autor: 'J.R.R. Tolkien',
        categoria: 'Fantasía',
        categoriaId: 'fantasia',
        tipo: 'libro',
        precio: 16000,
        img: imgHobbit,
        seccion: 'nuevo',
        chileno: false,
        stock: 23,
    },
    {
        id: 6,
        titulo: 'La Ciencia de la Cocina',
        autor: 'Harold McGee',
        categoria: 'Gastronomía',
        categoriaId: 'gastronomia',
        tipo: 'libro',
        precio: 28000,
        img: imgCienciaCocina,
        seccion: 'nuevo',
        chileno: false,
        stock: 19,
    },
    {
        id: 7,
        titulo: 'La Vuelta Al Mundo En 80 Dias',
        autor: 'Julio Verne',
        categoria: 'Infantiles',
        categoriaId: 'infantiles',
        tipo: 'libro',
        precio: 10000,
        img: imgVuelta80Dias,
        seccion: 'nuevo',
        chileno: false,
        stock: 27,
    },
    {
        id: 8,
        titulo: 'El arte de la guerra',
        autor: 'Sun Tzu',
        categoria: 'Filosófico',
        categoriaId: 'filosofico',
        tipo: 'libro',
        precio: 28000,
        img: imgArteGuerra,
        seccion: 'nuevo',
        chileno: false,
        stock: 42,
    },

    // ───────────── Ofertas ─────────────
    {
        id: 9,
        titulo: '1984',
        autor: 'George Orwell',
        categoria: 'Novela',
        categoriaId: 'novela',
        tipo: 'libro',
        precio: 8900,
        precioAntes: 9790,
        descuento: 10,
        img: img1984,
        seccion: 'oferta',
        chileno: false,
        stock: 15,
    },
    {
        id: 10,
        titulo: 'Sub-Terra',
        autor: 'Baldomero Lillo',
        categoria: 'Cuentos',
        categoriaId: 'cuentos',
        tipo: 'libro',
        precio: 12750,
        precioAntes: 15000,
        descuento: 25,
        img: imgSubterra,
        seccion: 'oferta',
        chileno: true,
        stock: 33,
    },
    {
        id: 11,
        titulo: 'Abejas - Una Guía Para Curiosos',
        autor: 'Susan E. Clark',
        categoria: 'Ciencia',
        categoriaId: 'ciencia',
        tipo: 'libro',
        precio: 9000,
        precioAntes: 10000,
        descuento: 10,
        img: imgAbejas,
        seccion: 'oferta',
        chileno: false,
        stock: 8,
    },
    {
        id: 12,
        titulo: 'Nepal - Panda Rojo',
        autor: 'Concepción Cortés',
        categoria: 'Infantiles',
        categoriaId: 'infantiles',
        tipo: 'libro',
        precio: 7000,
        precioAntes: 8000,
        descuento: 10,
        img: imgNepal,
        seccion: 'oferta',
        chileno: false,
        stock: 4,
    },

    // ───────────── Juegos de mesa  ─────────────
    {
        id: 13,
        titulo: 'Root: El Juego de Rol',
        autor: 'Magpie Games',
        categoria: 'Rol (RPG)',
        categoriaId: 'juegos-de-mesa',
        tipo: 'juego',
        precio: 39990,
        img: imgRoot,
        seccion: null,
        chileno: false,
        stock: 14,
    },
    {
        id: 14,
        titulo: 'Catan: El Juego',
        autor: 'Devir',
        categoria: 'Juegos de Mesa',
        categoriaId: 'juegos-de-mesa',
        tipo: 'juego',
        precio: 35000,
        img: imgCatan,
        seccion: null,
        chileno: false,
        stock: 20,
    },
    {
        id: 15,
        titulo: 'Uno',
        autor: 'Mattel',
        categoria: 'Juegos de Mesa',
        categoriaId: 'juegos-de-mesa',
        tipo: 'juego',
        precio: 4000,
        precioAntes: 5000,
        descuento: 10,
        img: imgUno,
        seccion: null,
        chileno: false,
        stock: 50,
    },
]

// ───────────── filtros ─────────────

export const obtenerLibro = (id) => libros.find((l) => l.id === Number(id))

export const librosPorSeccion = (seccion) => libros.filter((l) => l.seccion === seccion)

export const librosPorCategoria = (categoriaId) =>
    libros.filter((l) => l.categoriaId === categoriaId)

export const librosChilenos = () => libros.filter((l) => l.chileno)

export const librosEnOferta = () => libros.filter((l) => l.precioAntes)