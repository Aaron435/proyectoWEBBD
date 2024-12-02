const express = require('express');
const Acta = require('../models/Acta'); // Importamos el modelo Acta
const router = express.Router();

// Ruta para obtener todas las actas
router.get('/getAllActas', async (req, res) => {
  try {
    const actas = await Acta.find(); // Encuentra todos los documentos en la colección Acta
    res.status(200).json(actas); // Envia los datos como respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las actas' });
  }
});

module.exports = router;
