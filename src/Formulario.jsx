import React, { useState } from 'react'
import './Formulario.css'

export default function Formulario({ datos, setDatos}) {
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
                    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={datosForm.mascota} onChange={handleChange}/>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={datosForm.propietario} onChange={handleChange}/>
                    <label>Fecha</label>
                    <input type="date" name="fecha" className="u-full-width" value={datosForm.fecha} onChange={handleChange}/>
                    <label>hora</label>
                    <input type="time" name="hora" className="u-full-width" value={datosForm.hora} onChange={handleChange}/>
                    <label>Sintomas</label>
                    <textarea name="sintomas" className="u-full-width" value={datosForm.sintomas} onChange={handleChange}></textarea>
                    <button type="submit" className="u-full-width button-primary" onClick={handleSubmit}>Agregar Cita</button>
                </form>
            </div>
        </div>
    </div>
  )
}
