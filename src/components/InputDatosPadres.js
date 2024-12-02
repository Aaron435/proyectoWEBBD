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

const InputDatosPadres = ({ onSubmit }) => {
  // Estados para los datos del padre
  const [nombrePadre, setNombrePadre] = useState('');
  const [errorNombrePadre, setErrorNombrePadre] = useState('');
  const [apellidoPaternoPadre, setApellidoPaternoPadre] = useState('');
  const [errorApellidoPaternoPadre, setErrorApellidoPaternoPadre] = useState('');
  const [apellidoMaternoPadre, setApellidoMaternoPadre] = useState('');
  const [errorApellidoMaternoPadre, setErrorApellidoMaternoPadre] = useState('');
  const [curpPadre, setCurpPadre] = useState('');
  const [errorCurpPadre, setErrorCurpPadre] = useState('');
  const [nacionalidadPadre, setNacionalidadPadre] = useState('');
  const [errorNacionalidadPadre, setErrorNacionalidadPadre] = useState('');

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

  // Manejo de cambios para los campos del padre
  const handleNombrePadreChange = (e) => {
    const valor = e.target.value;
    setNombrePadre(valor);
    validarCampo(valor, nombreRegex, setErrorNombrePadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoPaternoPadreChange = (e) => {
    const valor = e.target.value;
    setApellidoPaternoPadre(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoPaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleApellidoMaternoPadreChange = (e) => {
    const valor = e.target.value;
    setApellidoMaternoPadre(valor);
    validarCampo(valor, nombreRegex, setErrorApellidoMaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleCurpPadreChange = (e) => {
    const valor = e.target.value;
    setCurpPadre(valor);
    validarCampo(valor, curpRegex, setErrorCurpPadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
  };

  const handleNacionalidadPadreChange = (e) => {
    const valor = e.target.value;
    setNacionalidadPadre(valor);
    validarCampo(valor, nacionalidadRegex, setErrorNacionalidadPadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');
  };

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

  // Validación final
  const handleSubmit = (e) => {
    e.preventDefault();

    const nombrePadreInvalido = validacionFinal(nombrePadre, nombreRegex, setErrorNombrePadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoPaternoPadreInvalido = validacionFinal(apellidoPaternoPadre, nombreRegex, setErrorApellidoPaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoMaternoPadreInvalido = validacionFinal(apellidoMaternoPadre, nombreRegex, setErrorApellidoMaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const curpPadreInvalido = validacionFinal(curpPadre, curpRegex, setErrorCurpPadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
    const nacionalidadPadreInvalido = validacionFinal(nacionalidadPadre, nacionalidadRegex, setErrorNacionalidadPadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');

    const nombreMadreInvalido = validacionFinal(nombreMadre, nombreRegex, setErrorNombreMadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoPaternoMadreInvalido = validacionFinal(apellidoPaternoMadre, nombreRegex, setErrorApellidoPaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoMaternoMadreInvalido = validacionFinal(apellidoMaternoMadre, nombreRegex, setErrorApellidoMaternoMadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const curpMadreInvalido = validacionFinal(curpMadre, curpRegex, setErrorCurpMadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
    const nacionalidadMadreInvalido = validacionFinal(nacionalidadMadre, nacionalidadRegex, setErrorNacionalidadMadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');

    if (nombrePadreInvalido || apellidoPaternoPadreInvalido || curpPadreInvalido || nacionalidadPadreInvalido ||
        nombreMadreInvalido || apellidoPaternoMadreInvalido || apellidoMaternoMadreInvalido || curpMadreInvalido || nacionalidadMadreInvalido) {
      return; // No enviar datos si hay errores
    }

    const datosPadres = {
      padre: {
        nombre: nombrePadre,
        apellidoPaterno: apellidoPaternoPadre,
        apellidoMaterno: apellidoMaternoPadre,
        curp: curpPadre,
        nacionalidad: nacionalidadPadre,
      },
      madre: {
        nombre: nombreMadre,
        apellidoPaterno: apellidoPaternoMadre,
        apellidoMaterno: apellidoMaternoMadre,
        curp: curpMadre,
        nacionalidad: nacionalidadMadre,
      },
    };

    // Enviar los datos al componente padre
    onSubmit(datosPadres);
  };

  // Retorno del componente
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Datos del Padre</h2>
      <InputField
        label="Nombres (Padre)"
        type="text"
        value={nombrePadre}
        onChange={handleNombrePadreChange}
        placeholder="Introduce los nombres del padre"
      />
      {errorNombrePadre && <p className="text-red-500">{errorNombrePadre}</p>}
      <InputField
        label="Apellido Paterno (Padre)"
        type="text"
        value={apellidoPaternoPadre}
        onChange={handleApellidoPaternoPadreChange}
        placeholder="Introduce el apellido paterno del padre"
      />
      {errorApellidoPaternoPadre && <p className="text-red-500">{errorApellidoPaternoPadre}</p>}
      <InputField
        label="Apellido Materno (Padre)"
        type="text"
        value={apellidoMaternoPadre}
        onChange={handleApellidoMaternoPadreChange}
        placeholder="Introduce el apellido materno del padre"
      />
      {errorApellidoMaternoPadre && <p className="text-red-500">{errorApellidoMaternoPadre}</p>}

      <InputField
        label="Nacionalidad (Padre)"
        type="text"
        value={nacionalidadPadre}
        onChange={handleNacionalidadPadreChange}
        placeholder="Introduce la nacionalidad del padre"
      />
      {errorNacionalidadPadre && <p className="text-red-500">{errorNacionalidadPadre}</p>}
      <InputField
        label="CURP (Padre)"
        type="text"
        value={curpPadre}
        onChange={handleCurpPadreChange}
        placeholder="Introduce la CURP del padre"
      />
      {errorCurpPadre && <p className="text-red-500">{errorCurpPadre}</p>}

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
        Enviar Datos de Padres
      </button>
    </form>
  );
};

export default InputDatosPadres;
