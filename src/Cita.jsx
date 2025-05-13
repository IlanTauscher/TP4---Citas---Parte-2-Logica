import React from 'react'
import './Cita.css'

export default function Cita({datos}) {
  return (
    <div>
        <div className="cita">
            <p>Mascota: <span>{datos.mascota}</span></p>
            <p>Dueño: <span>{datos.propietario}</span></p>
            <p>Fecha: <span>{datos.fecha}</span></p>
            <p>Hora: <span>{datos.hora}</span></p>
            <p>Sintomas: <span>{datos.sintomas}</span></p>
            <button className="button eliminar u-full-width">Eliminar ×</button>
        </div>
    </div>
  )
}
