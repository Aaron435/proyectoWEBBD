import React, { useState } from 'react';
import InputField from './InputField';
import { validarCampo, validacionFinal } from './validation';

const InputDatosPadre = ({ onSubmit }) => {
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

  // Expresiones regulares
  const nombreRegex = /^[a-zA-Z\s]+$/;
  const curpRegex = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9A-Z]{2}$/;
  const nacionalidadRegex = /^[a-zA-Z\s]+$/;

  // Manejo de cambios para los campos del padre
  const handleInputChange = (setter, validator, regex, setError, mensajeErrorRegex, mensajeErrorVacio) => (e) => {
    const valor = e.target.value;
    setter(valor);
    validarCampo(valor, regex, setError, mensajeErrorRegex, mensajeErrorVacio);
  };

  // Validación final
  const handleSubmit = (e) => {
    e.preventDefault();

    const nombrePadreInvalido = validacionFinal(nombrePadre, nombreRegex, setErrorNombrePadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoPaternoPadreInvalido = validacionFinal(apellidoPaternoPadre, nombreRegex, setErrorApellidoPaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const apellidoMaternoPadreInvalido = validacionFinal(apellidoMaternoPadre, nombreRegex, setErrorApellidoMaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos');
    const curpPadreInvalido = validacionFinal(curpPadre, curpRegex, setErrorCurpPadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos');
    const nacionalidadPadreInvalido = validacionFinal(nacionalidadPadre, nacionalidadRegex, setErrorNacionalidadPadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos');

    if (nombrePadreInvalido || apellidoPaternoPadreInvalido || curpPadreInvalido || nacionalidadPadreInvalido || apellidoMaternoPadreInvalido) {
      return; // No enviar datos si hay errores
    }

    const datosPadre = {
      padre: {
        nombre: nombrePadre,
        apellidoPaterno: apellidoPaternoPadre,
        apellidoMaterno: apellidoMaternoPadre,
        curp: curpPadre,
        nacionalidad: nacionalidadPadre,
      }
    };

    // Enviar los datos al componente padre
    onSubmit(datosPadre);
  };

  // Retorno del componente
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Datos del Padre</h2>
      <InputField
        label="Nombres (Padre)"
        type="text"
        value={nombrePadre}
        onChange={handleInputChange(setNombrePadre, validarCampo, nombreRegex, setErrorNombrePadre, 'El nombre solo puede contener letras y espacios', 'Llena todos los campos')}
        placeholder="Introduce los nombres del padre"
      />
      {errorNombrePadre && <p className="text-red-500">{errorNombrePadre}</p>}
      <InputField
        label="Apellido Paterno (Padre)"
        type="text"
        value={apellidoPaternoPadre}
        onChange={handleInputChange(setApellidoPaternoPadre, validarCampo, nombreRegex, setErrorApellidoPaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos')}
        placeholder="Introduce el apellido paterno del padre"
      />
      {errorApellidoPaternoPadre && <p className="text-red-500">{errorApellidoPaternoPadre}</p>}
      <InputField
        label="Apellido Materno (Padre)"
        type="text"
        value={apellidoMaternoPadre}
        onChange={handleInputChange(setApellidoMaternoPadre, validarCampo, nombreRegex, setErrorApellidoMaternoPadre, 'El apellido solo puede contener letras y espacios', 'Llena todos los campos')}
        placeholder="Introduce el apellido materno del padre"
      />
      {errorApellidoMaternoPadre && <p className="text-red-500">{errorApellidoMaternoPadre}</p>}

      <InputField
        label="Nacionalidad (Padre)"
        type="text"
        value={nacionalidadPadre}
        onChange={handleInputChange(setNacionalidadPadre, validarCampo, nacionalidadRegex, setErrorNacionalidadPadre, 'La nacionalidad solo puede contener letras y espacios', 'Llena todos los campos')}
        placeholder="Introduce la nacionalidad del padre"
      />
      {errorNacionalidadPadre && <p className="text-red-500">{errorNacionalidadPadre}</p>}
      <InputField
        label="CURP (Padre)"
        type="text"
        value={curpPadre}
        onChange={handleInputChange(setCurpPadre, validarCampo, curpRegex, setErrorCurpPadre, 'Ingrese el formato correcto de la CURP', 'Llena todos los campos')}
        placeholder="Introduce la CURP del padre"
      />
      {errorCurpPadre && <p className="text-red-500">{errorCurpPadre}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Enviar Datos del Padre
      </button>
    </form>
  );
};

export default InputDatosPadre;
