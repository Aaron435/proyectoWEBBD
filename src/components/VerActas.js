import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function VerActas() {
  const [actas, setActas] = useState([]);
  const [actasFiltradas, setActasFiltradas] = useState([]);
  const [nombreBuscado, setNombreBuscado] = useState('');
  const navigate = useNavigate(); 

 
  const fetchActas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getAllActas');
      setActas(response.data);
      setActasFiltradas(response.data); 
    } catch (error) {
      console.error('Error al obtener las actas', error);
    }
  };

  
  useEffect(() => {
    fetchActas();
  }, []);

  
  const handleInputChange = (e) => {
    const valor = e.target.value;
    setNombreBuscado(valor);

    
    const actasFiltradas = actas.filter(acta => 
      acta.DatosPersonales.nombre.toLowerCase().includes(valor.toLowerCase()) || 
      `${acta.DatosPersonales.apellidoPaterno} ${acta.DatosPersonales.apellidoMaterno}`.toLowerCase().includes(valor.toLowerCase())
    );
    setActasFiltradas(actasFiltradas);
  };

  
  const handleVerActaDetalle = (nombre) => {
    navigate(`/ver-actas/${nombre}`); 
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Actas Generadas</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={nombreBuscado}
        onChange={handleInputChange}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Mostrar las actas filtradas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {actasFiltradas.length > 0 ? (
          actasFiltradas.map((acta, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Acta #{index + 1}</h3>
              <p className="text-sm text-gray-700">
                <strong>Nombre: </strong>{acta.DatosPersonales.nombre} <br />
                <strong>CURP: </strong>{acta.DatosPersonales.curp} <br />
                <strong>Fecha de Nacimiento: </strong>{new Date(acta.DatosPersonales.fechaNacimiento).toLocaleDateString()} <br />
                <strong>Lugar de Nacimiento: </strong>{acta.DatosPersonales.lugarNacimiento} <br />
                <strong>Padre: </strong>{acta.DatosPadre.padre.nombre} <br />
                <strong>Madre: </strong>{acta.DatosMadre.madre.nombre} <br />
              </p>
              {/* Botón para ver el detalle del acta */}
              <button 
                onClick={() => handleVerActaDetalle(acta.DatosPersonales.nombre)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Ver Detalles
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron actas que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default VerActas;
