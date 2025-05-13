import Listado from "./listado"
import React, { useState } from 'react'
import Formulario from "./formulario"
import './App.css'

function App() {
  const [datos, setDatos] = useState([]);

  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <Formulario datos={datos} setDatos={setDatos}/>
        <Listado datos={datos}/>
      </div>
    </div>
  )
}

export default App
