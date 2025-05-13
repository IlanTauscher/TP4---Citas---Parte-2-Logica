import React, { useState } from 'react'
import './Formulario.css'

export default function Formulario({ datos, setDatos}) {
  const error="Hay campos vacios"
  const [i, setI] = useState(0);
  const[datosForm, setDatosForm] = useState({ 
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
    id: i,
  });

  const handleChange = e => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
  });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(datosForm.mascota.trim() === "" || datosForm.propietario.trim() === "" || datosForm.fecha.trim() === "" || datosForm.hora.trim() === "" || datosForm.sintomas.trim() === ""){
      return alert(error);
    }
    setDatos([...datos, datosForm]);
    setDatosForm({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
      id: i,
    });
  

    setI((prev) => prev + 1);
  };
  return (
    <div>
        <div>
            <div>
                <h2>Crear mi Cita</h2>
                <form>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre de la Mascota" value={datosForm.mascota} onChange={handleChange}/>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del dueño de la mascota" value={datosForm.propietario} onChange={handleChange}/>
                    <label>Fecha</label>
                    <input type="date" name="fecha" className="u-full-width" value={datosForm.fecha} onChange={handleChange}/>
                    <label>hora</label>
                    <input type="time" name="hora" className="u-full-width" value={datosForm.hora} onChange={handleChange}/>
                    <label>Sintomas</label>
                    <textarea name="sintomas" className="u-full-width" placeholder="Sintomas del animal" value={datosForm.sintomas} onChange={handleChange}></textarea>
                    <button type="submit" className="u-full-width button-primary" onClick={handleSubmit}>Agregar Cita</button>
                </form>
            </div>
        </div>
    </div>
  )
}
