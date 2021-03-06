
import './App.css';
import Menu from './utils/Menu'
import { BrowserRouter, Route } from 'react-router-dom';
import rutas from './route-config'
import { Switch } from 'react-router'
import configurarValidaciones from './validaciones'

configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>

        <Menu />

        <div className='container'>
          <Switch>
            {rutas.map(ruta => 
            <Route key={ruta.path} path={ruta.path}
             exact={ruta.exact}>
               <ruta.componente/>
               </Route>)}            
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
