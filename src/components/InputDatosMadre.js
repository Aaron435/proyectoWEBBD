import React, { useState } from 'react';
import InputField from './InputField.js';

// Función para validar las regex
const validarCampo = (valor, regex, setError, mensajeErrorRegex, mensajeErrorVacio) => {
  if (valor === '') {
    setError(mensajeErrorVacio);
  } else if (!regex.test(valor)) {
    setError(mensajeErrorRegex);
  } else {
    setError('');
  }
};

// Función para validar antes de enviar
const validacionFinal = (valor, regex, setError, mensajeErrorRegex, mensajeErrorVacio) => {
  if (valor === '') {
    setError(mensajeErrorVacio);
    return true;
  } else if (!regex.test(valor)) {
    setError(mensajeErrorRegex);
    return true;
  } else {
    return false;
  }
};

const InputDatosMadre = ({ onSubmit }) => {
  // Estados para los datos de la madre
  const [nombreMadre, setNombreMadre] = useState('');
  const [errorNombreMadre, setErrorNombreMadre] = useState('');
  const [apellidoPaternoMadre, setApellidoPaternoMadre] = useState('');
  const [errorApellidoPaternoMadre, setErrorApellidoPaternoMadre] = useState('');
  const [apellidoMaternoMadre, setApellidoMaternoMadre] = useState('');
  const [errorApellidoMaternoMadre, setErrorApellidoMaternoMadre] = useState('');
  const [curpMadre, setCurpMadre] = useState('');
  const [errorCurpMadre, setErrorCurpMadre] = useState('');
  const [nacionalidadMadre, setNacionalidadMadre] = useState('');
  const [errorNacionalidadMadre, setErrorNacionalidadMadre] = useState('');

  // Expresiones regulares
  const nombreRegex = /^[a-zA-Z\s]+$/;
  const curpRegex = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9A-Z]{2}$/;
  const nacionalidadRegex = /^[a-zA-Z\s]+$/;

  // Manejo de cambios para los campos de la madre
  const handleNombreMadreChange = (e) => {
    const valor = e.target.value;
    setNombreMadre(valor);
    validarCampo(valor, nombreRegex, setErrorNombreMadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoPaternoMadreChange = (e) => {
    const valor = e.target.value;
    setApellidoPaternoMadre(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoPaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoMaternoMadreChange = (e) => {
    const valor = e.target.value;
    setApellidoMaternoMadre(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoMaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleCurpMadreChange = (e) => {
    const valor = e.target.value;
    setCurpMadre(valor);
    validarCampo(valor, curpRegex, setErrorCurpMadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
  };

  const handleNacionalidadMadreChange = (e) => {
    const valor = e.target.value;
    setNacionalidadMadre(valor);
    validarCampo(valor, nacionalidadRegex, setErrorNacionalidadMadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');
  };

  // Validación centralizada
  const validarCampos = () => {
    const errores = {};
    const nombreMadreInvalido = validacionFinal(nombreMadre, nombreRegex, setErrorNombreMadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoPaternoMadreInvalido = validacionFinal(apellidoPaternoMadre, nombreRegex, setErrorApellidoPaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoMaternoMadreInvalido = validacionFinal(apellidoMaternoMadre, nombreRegex, setErrorApellidoMaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const curpMadreInvalido = validacionFinal(curpMadre, curpRegex, setErrorCurpMadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
    const nacionalidadMadreInvalido = validacionFinal(nacionalidadMadre, nacionalidadRegex, setErrorNacionalidadMadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');

    if (nombreMadreInvalido) errores.nombre = errorNombreMadre;
    if (apellidoPaternoMadreInvalido) errores.apellidoPaterno = errorApellidoPaternoMadre;
    if (apellidoMaternoMadreInvalido) errores.apellidoMaterno = errorApellidoMaternoMadre;
    if (curpMadreInvalido) errores.curp = errorCurpMadre;
    if (nacionalidadMadreInvalido) errores.nacionalidad = errorNacionalidadMadre;

    return errores;
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarCampos();

    if (Object.keys(errores).length > 0) {
      // Si hay errores, no enviar datos
      return;
    }

    const datosMadre = {
      madre: {
        nombre: nombreMadre,
        apellidoPaterno: apellidoPaternoMadre,
        apellidoMaterno: apellidoMaternoMadre,
        curp: curpMadre,
        nacionalidad: nacionalidadMadre,
      },
    };

    onSubmit(datosMadre);
  };

  // Retorno del componente
  return (
    <form onSubmit={handleSubmit}>

      <h2 className="text-xl font-semibold mt-6">Datos de la Madre</h2>
      <InputField
        label="Nombres (Madre)"
        type="text"
        value={nombreMadre}
        onChange={handleNombreMadreChange}
        placeholder="Introduce los nombres de la madre"
      />
      {errorNombreMadre && <p className="text-red-500">{errorNombreMadre}</p>}
      <InputField
        label="Apellido Paterno (Madre)"
        type="text"
        value={apellidoPaternoMadre}
        onChange={handleApellidoPaternoMadreChange}
        placeholder="Introduce el apellido paterno de la madre"
      />
      {errorApellidoPaternoMadre && <p className="text-red-500">{errorApellidoPaternoMadre}</p>}
      <InputField
        label="Apellido Materno (Madre)"
        type="text"
        value={apellidoMaternoMadre}
        onChange={handleApellidoMaternoMadreChange}
        placeholder="Introduce el apellido materno de la madre"
      />
      {errorApellidoMaternoMadre && <p className="text-red-500">{errorApellidoMaternoMadre}</p>}
      <InputField
        label="Nacionalidad (Madre)"
        type="text"
        value={nacionalidadMadre}
        onChange={handleNacionalidadMadreChange}
        placeholder="Introduce la nacionalidad de la madre"
      />
      {errorNacionalidadMadre && <p className="text-red-500">{errorNacionalidadMadre}</p>}
      <InputField
        label="CURP (Madre)"
        type="text"
        value={curpMadre}
        onChange={handleCurpMadreChange}
        placeholder="Introduce la CURP de la madre"
      />
      {errorCurpMadre && <p className="text-red-500">{errorCurpMadre}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Enviar Datos de la Madre
      </button>
    </form>
  );
};

export default InputDatosMadre;
