import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Asegúrate de que esta sea la URL correcta de tu API

// Función para insertar un acta
export const insertActa = async (actaData) => {
  try {
    const response = await axios.post(`${API_URL}/insertActa`, actaData);
    return response.data; // Retorna los datos del acta insertada
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : 'Error al insertar el acta');
  }
};
