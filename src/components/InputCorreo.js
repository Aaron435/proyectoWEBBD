import React, { useState } from 'react';


const InputCorreo = ({ pdfData }) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  
  // Expresión regular para validar el correo electrónico
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validarCorreo = (valor) => {
    if (valor === '') {
      setErrorEmail('Introduce un correo electrónico');
    } else if (!emailRegex.test(valor)) {
      setErrorEmail('El correo electrónico no es válido');
    } else {
      setErrorEmail('');
    }
  };

  const handleEmailChange = (e) => {
    const valor = e.target.value;
    setEmail(valor);
    validarCorreo(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el correo electrónico antes de enviar
    if (email === '' || errorEmail) {
      setErrorEmail('Introduce un correo electrónico válido antes de enviar');
      return;
    }
    // Parámetros para enviar el correo
    const templateParams = {
      email // Correo electrónico ingresado
      
    };
      onSubmit(templateParams)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mt-4 text-sm font-medium text-gray-700">Correo Electrónico</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Introduce tu correo"
      />
      {errorEmail && <p className="text-red-500">{errorEmail}</p>}
      
      {mensajeExito && <p className="text-green-500">{mensajeExito}</p>}

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
        Enviar PDF
      </button>
    </form>
  );
};

export default InputCorreo;
