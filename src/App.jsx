import Listado from "./listado"
import React, { useState, useEffect } from 'react'
import Formulario from "./formulario"
import './App.css'

function App() {
  const KEY_LOCAL_STORAGE = 'datosform'
  const [datos, setDatos] = useState( () => {
    const listaGuardada = localStorage.getItem(KEY_LOCAL_STORAGE)
    if(listaGuardada != null)
     return JSON.parse(listaGuardada)
    else
    return []
  }
  );

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(datos));
  }, [datos]);

  
  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <Formulario datos={datos} setDatos={setDatos}/>
        <Listado datos={datos} setDatos={setDatos} />
      </div>
    </div>
  )
}

export default App