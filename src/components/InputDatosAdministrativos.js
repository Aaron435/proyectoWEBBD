import React, { useState } from 'react';
import '../css/InputDatosAdministrativos.css';
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

const InputDatosAdministrativos = ({ onSubmit }) => {
  // Estados para los datos administrativos
  const [numeroCertificadoNacimiento, setNumeroCertificadoNacimiento] = useState('');
  const [errorNumeroCertificadoNacimiento, setErrorNumeroCertificadoNacimiento] = useState('');
  const [entidadRegistro, setEntidadRegistro] = useState('');
  const [errorEntidadRegistro, setErrorEntidadRegistro] = useState('');
  const [municipioRegistro, setMunicipioRegistro] = useState('');
  const [errorMunicipioRegistro, setErrorMunicipioRegistro] = useState('');
  const [oficialia, setOficialia] = useState('');
  const [errorOficialia, setErrorOficialia] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  const [errorFechaRegistro, setErrorFechaRegistro] = useState('');
  const [libro, setLibro] = useState('');
  const [errorLibro, setErrorLibro] = useState('');
  const [numeroActa, setNumeroActa] = useState('');
  const [errorNumeroActa, setErrorNumeroActa] = useState('');
  const [anotacionesMarginales, setAnotacionesMarginales] = useState('');
  const [errorAnotacionesMarginales, setErrorAnotacionesMarginales] = useState('');
  const [certificaciones, setCertificaciones] = useState('');
  const [errorCertificaciones, setErrorCertificaciones] = useState('');

  // Expresiones regulares
  const numeroCertificadoRegex = /^\d+$/; // Solo números
  const entidadRegex = /^[a-zA-Z\s]+$/; // Letras y espacios
  const municipioRegex = /^[a-zA-Z\s]+$/; // Letras y espacios
  const oficialiaRegex = /^[a-zA-Z0-9\s]+$/; // Letras, números y espacios
  const libroRegex = /^\d+$/; // Solo números
  const numeroActaRegex = /^\d+$/; // Solo números
  const anotacionesRegex = /^[a-zA-Z0-9\s.,-]*$/; // Letras, números, espacios y ciertos caracteres
  const certificacionesRegex = /^[a-zA-Z0-9\s.,-]*$/; // Letras, números, espacios y ciertos caracteres

  // Manejo de cambios para los campos
  const handleNumeroCertificadoNacimientoChange = (e) => {
    const valor = e.target.value;
    setNumeroCertificadoNacimiento(valor);
    validarCampo(valor, numeroCertificadoRegex, setErrorNumeroCertificadoNacimiento, 'Solo se permiten números', 'Llena todos los campos');
  };

  const handleEntidadRegistroChange = (e) => {
    const valor = e.target.value;
    setEntidadRegistro(valor);
    validarCampo(valor, entidadRegex, setErrorEntidadRegistro, 'La entidad solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleMunicipioRegistroChange = (e) => {
    const valor = e.target.value;
    setMunicipioRegistro(valor);
    validarCampo(valor, municipioRegex, setErrorMunicipioRegistro, 'El municipio solo puede contener letras y espacios', 'Llena todos los campos');
  };

  const handleOficialiaChange = (e) => {
    const valor = e.target.value;
    setOficialia(valor);
    validarCampo(valor, oficialiaRegex, setErrorOficialia, 'La oficialía solo puede contener letras, números y espacios', 'Llena todos los campos');
  };

  const handleFechaRegistroChange = (e) => {
    const valor = e.target.value;
    setFechaRegistro(valor);
    if (valor === '') {
      setErrorFechaRegistro('Llena todos los campos');
    } else {
      setErrorFechaRegistro('');
    }
  };

  const handleLibroChange = (e) => {
    const valor = e.target.value;
    setLibro(valor);
    validarCampo(valor, libroRegex, setErrorLibro, 'Solo se permiten números', 'Llena todos los campos');
  };

  const handleNumeroActaChange = (e) => {
    const valor = e.target.value;
    setNumeroActa(valor);
    validarCampo(valor, numeroActaRegex, setErrorNumeroActa, 'Solo se permiten números', 'Llena todos los campos');
  };

  const handleAnotacionesMarginalesChange = (e) => {
    const valor = e.target.value;
    setAnotacionesMarginales(valor);
    validarCampo(valor, anotacionesRegex, setErrorAnotacionesMarginales, 'La anotación puede contener letras, números y caracteres especiales', 'Llena todos los campos');
  };

  const handleCertificacionesChange = (e) => {
    const valor = e.target.value;
    setCertificaciones(valor);
    validarCampo(valor, certificacionesRegex, setErrorCertificaciones, 'La certificación puede contener letras, números y caracteres especiales', 'Llena todos los campos');
  };

  // Validación final
  const handleSubmit = (e) => {
    e.preventDefault();

    const numeroCertificadoInvalido = validacionFinal(numeroCertificadoNacimiento, numeroCertificadoRegex, setErrorNumeroCertificadoNacimiento, 'Solo se permiten números', 'Llena todos los campos');
    const entidadInvalida = validacionFinal(entidadRegistro, entidadRegex, setErrorEntidadRegistro, 'La entidad solo puede contener letras y espacios', 'Llena todos los campos');
    const municipioInvalido = validacionFinal(municipioRegistro, municipioRegex, setErrorMunicipioRegistro, 'El municipio solo puede contener letras y espacios', 'Llena todos los campos');
    const oficialiaInvalida = validacionFinal(oficialia, oficialiaRegex, setErrorOficialia, 'La oficialía solo puede contener letras, números y espacios', 'Llena todos los campos');
    const fechaRegistroInvalida = fechaRegistro === '' ? true : false; // Verificación simple
    const libroInvalido = validacionFinal(libro, libroRegex, setErrorLibro, 'Solo se permiten números', 'Llena todos los campos');
    const numeroActaInvalido = validacionFinal(numeroActa, numeroActaRegex, setErrorNumeroActa, 'Solo se permiten números', 'Llena todos los campos');
    const anotacionesInvalido = validacionFinal(anotacionesMarginales, anotacionesRegex, setErrorAnotacionesMarginales, 'La anotación puede contener letras, números y caracteres especiales', 'Llena todos los campos');
    const certificacionesInvalido = validacionFinal(certificaciones, certificacionesRegex, setErrorCertificaciones, 'La certificación puede contener letras, números y caracteres especiales', 'Llena todos los campos');

    if (numeroCertificadoInvalido || entidadInvalida || municipioInvalido || oficialiaInvalida || fechaRegistroInvalida ||
        libroInvalido || numeroActaInvalido || anotacionesInvalido || certificacionesInvalido) {
      return; // No enviar datos si hay errores
    }

    const datosAdministrativos = {
      numeroCertificadoNacimiento,
      entidadRegistro,
      municipioRegistro,
      oficialia,
      fechaRegistro,
      libro,
      numeroActa,
      anotacionesMarginales,
      certificaciones
    };

    // Enviar los datos al componente padre
    onSubmit(datosAdministrativos);
  };

  // Retorno del componente
  return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">Datos Administrativos</h2>
        <div className="form-container">
            <div className="form-column">
                <InputField
                    label="N° Certificado"
                    type="text"
                    value={numeroCertificadoNacimiento}
                    onChange={handleNumeroCertificadoNacimientoChange}
                    placeholder="Introduce el número de certificado"
                />
                 {errorNumeroCertificadoNacimiento && <p className="text-red-500">{errorNumeroCertificadoNacimiento}</p>}
                <InputField
                    label="Entidad de Registro"
                    type="text"
                    value={entidadRegistro}
                    onChange={handleEntidadRegistroChange}
                    placeholder="Introduce la entidad de registro"
                />
                {errorEntidadRegistro && <p className="text-red-500">{errorEntidadRegistro}</p>}
                <InputField
                    label="Municipio de Registro"
                    type="text"
                    value={municipioRegistro}
                    onChange={handleMunicipioRegistroChange}
                    placeholder="Introduce el municipio de registro"
                />
                {errorMunicipioRegistro && <p className="text-red-500">{errorMunicipioRegistro}</p>}
                <InputField
                    label="Oficialía"
                    type="text"
                    value={oficialia}
                    onChange={handleOficialiaChange}
                    placeholder="Introduce la oficialía"
                />
                {errorOficialia && <p className="text-red-500">{errorOficialia}</p>}
                <InputField
                    label="Fecha de Registro"
                    type="date"
                    value={fechaRegistro}
                    onChange={handleFechaRegistroChange}
                />
                {errorFechaRegistro && <p className="text-red-500">{errorFechaRegistro}</p>}
            </div>
            <div className="form-column">
                <InputField
                    label="Libro"
                    type="text"
                    value={libro}
                    onChange={handleLibroChange}
                    placeholder="Introduce el libro"
                />
                {errorLibro && <p className="text-red-500">{errorLibro}</p>}
                <InputField
                    label="Número de Acta"
                    type="text"
                    value={numeroActa}
                    onChange={handleNumeroActaChange}
                    placeholder="Introduce el número de acta"
                />
                {errorNumeroActa && <p className="text-red-500">{errorNumeroActa}</p>}
                <InputField
                    label="Anotaciones Marginales"
                    type="text"
                    value={anotacionesMarginales}
                    onChange={handleAnotacionesMarginalesChange}
                    placeholder="Introduce las anotaciones marginales"
                />
                 {errorAnotacionesMarginales && <p className="text-red-500">{errorAnotacionesMarginales}</p>}
                <InputField
                    label="Certificaciones"
                    type="text"
                    value={certificaciones}
                    onChange={handleCertificacionesChange}
                    placeholder="Introduce las certificaciones"
                />
                {errorCertificaciones && <p className="text-red-500">{errorCertificaciones}</p>}
            </div>
        </div>
        <div className="submit-button">
            <button type="submit">Enviar Datos Administrativos Y Descargar PDF</button>
        </div>
    </form>
  );
};

export default InputDatosAdministrativos;
