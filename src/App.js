import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
