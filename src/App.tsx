
import './App.css';
import Menu from './peliculas/utils/Menu'
import { BrowserRouter, Route } from 'react-router-dom';
import rutas from './route-config'


function App() {
  return (
    <>
      <BrowserRouter>

        <Menu />

        <div className='container'>
          <switch>
            {rutas.map(ruta => 
            <Route key={ruta.path} path={ruta.path}
             exact={ruta.exact}>
               <ruta.componente/>
               </Route>)}            
          </switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
