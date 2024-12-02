// InputDatosPersonales.js
import React, { useState } from 'react';
import InputField from './InputField';
import { validarCampo, validacionFinal } from './validation'; // Importar las funciones de validación

const InputDatosPersonales = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [errorApellidoPaterno, setErrorApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [errorApellidoMaterno, setErrorApellidoMaterno] = useState('');
  const [curp, setCurp] = useState('');
  const [errorCurp, setErrorCurp] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [errorFechaNacimiento, setErrorFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [errorSexo, setErrorSexo] = useState('');
  const [lugarNacimiento, setLugarNacimiento] = useState('');
  const [errorLugarNacimiento, setErrorLugarNacimiento] = useState('');

  const nombreRegex = /^[a-zA-Z\s]+$/;
  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
  const curpRegex = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9A-Z]{2}$/;

  const handleNombreChange = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    validarCampo(valor, nombreRegex, setErrorNombre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoPaternoChange = (e) => {
    const valor = e.target.value;
    setApellidoPaterno(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoPaterno, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoMaternoChange = (e) => {
    const valor = e.target.value;
    setApellidoMaterno(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoMaterno, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleCurpChange = (e) => {
    const valor = e.target.value;
    setCurp(valor);
    validarCampo(valor, curpRegex, setErrorCurp, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
  };

  const handleFechaChange = (e) => {
    const valor = e.target.value;
    setFechaNacimiento(valor);
    validarCampo(valor, fechaRegex, setErrorFechaNacimiento, 'La fecha debe tener el formato YYYY-MM-DD', 'Introduce una Fecha de Nacimiento');
  };

  const handleSexoChange = (e) => {
    const valor = e.target.value;
    setSexo(valor);
    if (valor === '') {
      setErrorSexo('Selecciona un sexo');
    } else {
      setErrorSexo('');
    }
  };

  const handleLugarNacimientoChange = (e) => {
    const valor = e.target.value;
    setLugarNacimiento(valor);
    validarCampo(valor, nombreRegex, setErrorLugarNacimiento, 'El lugar de nacimiento debe contener solo letras y espacios', 'Introduce un Lugar de Nacimiento');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreInvalido = validacionFinal(nombre, nombreRegex, setErrorNombre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
    const fechaInvalida = validacionFinal(fechaNacimiento, fechaRegex, setErrorFechaNacimiento, 'La fecha debe tener el formato YYYY-MM-DD', 'Introduce una Fecha de Nacimiento');
    const apellidoPaternoInvalido = validacionFinal(apellidoPaterno, nombreRegex, setErrorApellidoPaterno, 'El apellido solo puede contener letras y espacios', 'Introduce un apellido');
    const apellidoMaternoInvalido = validacionFinal(apellidoMaterno, nombreRegex, setErrorApellidoMaterno, 'El apellido solo puede contener letras y espacios', 'Introduce un apellido');
    const curpInvalido = validacionFinal(curp, curpRegex, setErrorCurp, 'Ingrese el formato correcto de la CURP', 'Introduce una CURP');
    const sexoInvalido = sexo === '' ? (setErrorSexo('Selecciona un sexo'), true) : false;
    const lugarNacimientoInvalido = validacionFinal(lugarNacimiento, nombreRegex, setErrorLugarNacimiento, 'El Lugar de Nacimiento solo puede contener letras y espacios', 'Introduce un lugar de nacimiento');

    if (nombreInvalido || fechaInvalida || apellidoPaternoInvalido || apellidoMaternoInvalido || curpInvalido || sexoInvalido || lugarNacimientoInvalido) {
      return;
    }

    const datos = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      curp,
      fechaNacimiento,
      sexo,
      lugarNacimiento
    };

    onSubmit(datos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Nombres" type="text" value={nombre} onChange={handleNombreChange} placeholder="Introduce tus nombres" />
      {errorNombre && <p className="text-red-500">{errorNombre}</p>}
      
      <InputField label="Apellido Paterno" type="text" value={apellidoPaterno} onChange={handleApellidoPaternoChange} placeholder="Introduce tu apellido paterno" />
      {errorApellidoPaterno && <p className="text-red-500">{errorApellidoPaterno}</p>}

      <InputField label="Apellido Materno" type="text" value={apellidoMaterno} onChange={handleApellidoMaternoChange} placeholder="Introduce tu apellido materno" />
      {errorApellidoMaterno && <p className="text-red-500">{errorApellidoMaterno}</p>}

      <InputField label="CURP" type="text" value={curp} onChange={handleCurpChange} placeholder="Introduce tu CURP" />
      {errorCurp && <p className="text-red-500">{errorCurp}</p>}

      <InputField label="Fecha de Nacimiento" type="date" value={fechaNacimiento} onChange={handleFechaChange} />
      {errorFechaNacimiento && <p className="text-red-500">{errorFechaNacimiento}</p>}

      <label className="block mt-4 text-sm font-medium text-gray-700">Sexo</label>
      <select value={sexo} onChange={handleSexoChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
        <option value="">Selecciona tu sexo</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
      {errorSexo && <p className="text-red-500">{errorSexo}</p>}

      <InputField label="Lugar de Nacimiento" type="text" value={lugarNacimiento} onChange={handleLugarNacimientoChange} placeholder="Introduce tu lugar de Nacimiento" />
      {errorLugarNacimiento && <p className="text-red-500">{errorLugarNacimiento}</p>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded-md">Enviar</button>
    </form>
  );
};

export default InputDatosPersonales;
