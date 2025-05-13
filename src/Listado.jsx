import React from 'react'
import Cita from './cita'
import './Listado.css'

export default function Listado({datos, setDatos}) {
  const eliminarCita = (id) => {
    const nuevasCitas = datos.filter((datos) => datos.id !== id);
    setDatos(nuevasCitas);
  };

  return (
    <div className="one-half column">
        <h2>Administra tus citas</h2>
        {datos.map(datos => ( 
        <Cita key={datos.id} datos={datos} eliminarCita={eliminarCita}/>
      ))}
    </div>
  )
}
