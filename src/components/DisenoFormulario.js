// src/FormularioPage.js
import React from 'react';
import Formulario from './Formulario.js';

const DisenoFormulario = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Generar Acta de Nacimiento</h1>
        <Formulario />
      </div>
    </div>
  );
};

export default DisenoFormulario;
