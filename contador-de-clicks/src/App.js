import './App.css';
import Boton from './componentes/boton';
import logo from './imagenes/logo.png';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);


  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };
  
  return (
    <div className="App">
      <div className ='freecodecamp-logo-contenedor'>
        <img 
          className ='logo'
          src={logo}
          alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks = {numClicks} />
        <Boton
        texto = 'Click'
        esBotonDeClic = {true}
        manejarClick = {manejarClick}/>
        <Boton
        texto = 'Reiniciar'
        esBotonDeClic = {false}
        manejarClick = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
