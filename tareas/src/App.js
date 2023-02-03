import logo from './imagenes/logo.png';
import './App.css';
import ListaDeTareas from './componentes/listadetareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='codecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
      
    </div>
  );
}

export default App;
