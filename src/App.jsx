import Listado from "./listado"
import Formulario from "./formulario"
import './App.css'

function App() {


  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <Formulario />
        <Listado />
      </div>
    </div>
  )
}

export default App
