import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearGenero from "./generos/CrearGenero"
import EditarGenero from "./generos/EditarGenero"

import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";

import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";

import CrearPeliculas from "./peliculas/CrearPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
 
const rutas = [    
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar', componente: EditarActores},
    {path: '/actores', componente: IndiceActores},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar', componente: EditarCines},
    {path: '/cines', componente: IndiceCines},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},

    {path: '/', componente: LandingPage, exact: true}
];

export default rutas;