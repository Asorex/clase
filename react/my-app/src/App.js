import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return ( 
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio 
          name='Shawn Wang'
          pais='Singapore'
          imagen='Shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer, freeCodeCamp changed my life.' />
      <Testimonio
          name='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
      <Testimonio
          name='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;
