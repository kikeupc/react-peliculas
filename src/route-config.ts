import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearGenero from "./generos/CrearGenero"
import EditarGenero from "./generos/EditarGenero"
 
const rutas = [    
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/', componente: LandingPage, exact: true}
];

export default rutas;