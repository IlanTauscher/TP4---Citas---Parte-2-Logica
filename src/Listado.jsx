import React from 'react'
import { useState } from 'react'
import Cita from './cita'
import './Listado.css'

export default function Listado() {
    const [citas] = useState([
        { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
        { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
        { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
      ]);
    

  return (
    <div class="one-half column">
        <h2>Administra tus citas</h2>
        {citas.map(cita => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  )
}
