// validation.js

export const validarCampo = (valor, regex, setError, mensajeErrorRegex, mensajeErrorVacio) => {
    if (valor === '') {
      setError(mensajeErrorVacio);
    } else if (!regex.test(valor)) {
      setError(mensajeErrorRegex);
    } else {
      setError('');
    }
  };
  
  export const validacionFinal = (valor, regex, setError, mensajeErrorRegex, mensajeErrorVacio) => {
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
  