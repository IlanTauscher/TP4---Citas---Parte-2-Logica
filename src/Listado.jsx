import React from 'react'
import Cita from './cita'
import './Listado.css'

export default function Listado({datos}) {
  return (
    <div className="one-half column">
        <h2>Administra tus citas</h2>
        {datos.map(datos => ( 
        <Cita key={datos.id} datos={datos} />
      ))}
    </div>
  )
}
