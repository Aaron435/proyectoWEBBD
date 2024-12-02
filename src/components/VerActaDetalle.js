import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VerActaDetalle() {
  const { nombre } = useParams(); // Obtenemos el parámetro 'nombre' de la URL
  const [acta, setActa] = useState(null);

  useEffect(() => {
    const fetchActa = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getActaByName/${nombre}`);
        setActa(response.data); // Guardamos el acta en el estado
      } catch (error) {
        console.error('Error al obtener el acta', error);
      }
    };

    fetchActa();
  }, [nombre]); // Llamamos a la API cuando el nombre cambie

  if (!acta) {
    return <div>Cargando...</div>; // Mostramos un mensaje mientras se carga el acta
  }

  return (
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Detalles del Acta</h2>

      <div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">Datos Personales</h3>
  <p><strong>Nombre: </strong>{acta.DatosPersonales.nombre} {acta.DatosPersonales.apellidoPaterno} {acta.DatosPersonales.apellidoMaterno}</p>
  <p><strong>CURP: </strong>{acta.DatosPersonales.curp}</p>
  <p><strong>Sexo: </strong>{acta.DatosPersonales.sexo}</p> {/* Corrección en "Sexo" */}
  <p><strong>Fecha de Nacimiento: </strong>{new Date(acta.DatosPersonales.fechaNacimiento).toISOString().substring(0, 10)}</p> {/* Corrección en "FechaNacimiento" */}
  <p><strong>Lugar de Nacimiento: </strong>{acta.DatosPersonales.lugarNacimiento}</p> {/* Corrección en "LugarNacimiento" */}
</div>

{/* Datos del Padre */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">Datos del Padre</h3>
  <p><strong>Nombre: </strong>{acta.DatosPadre.padre.nombre} {acta.DatosPadre.padre.apellidoPaterno} {acta.DatosPadre.padre.apellidoMaterno}</p> {/* Corrección en "padre" */}
  <p><strong>CURP: </strong>{acta.DatosPadre.padre.curp}</p> {/* Corrección en "padre" */}
  <p><strong>Nacionalidad: </strong>{acta.DatosPadre.padre.nacionalidad}</p> {/* Corrección en "padre" */}
</div>

{/* Datos de la Madre */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">Datos de la Madre</h3>
  <p><strong>Nombre: </strong>{acta.DatosMadre.madre.nombre} {acta.DatosMadre.madre.apellidoPaterno} {acta.DatosMadre.madre.apellidoMaterno}</p> {/* Corrección en "madre" */}
  <p><strong>CURP: </strong>{acta.DatosMadre.madre.curp}</p> {/* Corrección en "madre" */}
  <p><strong>Nacionalidad: </strong>{acta.DatosMadre.madre.nacionalidad}</p> {/* Corrección en "madre" */}
</div>

{/* Datos Administrativos */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">Datos Administrativos</h3>
  <p><strong>Número de Certificado de Nacimiento: </strong>{acta.DatosAdministrativos.numeroCertificadoNacimiento}</p>
  <p><strong>Entidad de Registro: </strong>{acta.DatosAdministrativos.entidadRegistro}</p> {/* Corrección en "EntidadRegistro" */}
  <p><strong>Municipio de Registro: </strong>{acta.DatosAdministrativos.municipioRegistro}</p> {/* Corrección en "MunicipioRegistro" */}
  <p><strong>Oficialía: </strong>{acta.DatosAdministrativos.oficialia}</p> {/* Corrección en "Oficialia" */}
  <p><strong>Fecha de Registro: </strong>{new Date(acta.DatosAdministrativos.fechaRegistro).toISOString().substring(0, 10)}</p> {/* Corrección en "FechaRegistro" */}
  <p><strong>Libro: </strong>{acta.DatosAdministrativos.libro}</p> {/* Corrección en "Libro" */}
  <p><strong>Número de Acta: </strong>{acta.DatosAdministrativos.numeroActa}</p> {/* Corrección en "NumeroActa" */}
  <p><strong>Anotaciones Marginales: </strong>{acta.DatosAdministrativos.anotacionesMarginales}</p> {/* Corrección en "AnotacionesMarginales" */}
  <p><strong>Certificaciones: </strong>{acta.DatosAdministrativos.certificaciones}</p> {/* Corrección en "Certificaciones" */}
</div>

    </div>
  );
}

export default VerActaDetalle;
