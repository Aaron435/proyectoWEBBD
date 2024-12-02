const express = require('express');
const Actas = require('../models/Acta'); // Ruta hacia tu modelo Acta
const router = express.Router();

// Ruta para insertar un acta
router.post('/insertActa', async (req, res) => {
    try {
      const newActa = new Actas(req.body); // El cuerpo de la solicitud contiene el objeto acta
      const savedActa = await newActa.save(); // Guarda el documento en MongoDB
      res.status(201).json(savedActa); // Responde con el acta guardada
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  });
  

router.get('/getAllActas', async (req, res) => {
    try {
      const actas = await Actas.find(); // Encuentra todos los documentos en la colección Acta
      res.status(200).json(actas); // Envia los datos como respuesta en formato JSON
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las actas',
        "typeError":error
       });
    }
  });

  // Ruta para obtener un acta por nombre
router.get('/getActaByName/:nombre', async (req, res) => {
    const { nombre } = req.params;  // Obtenemos el nombre del parámetro de la URL
    try {
      const acta = await Actas.findOne({ 'DatosPersonales.nombre': nombre }); // Buscamos la acta por nombre
      if (!acta) {
        return res.status(404).json({ error: 'Acta no encontrada' });
      }
      res.status(200).json(acta); // Respondemos con el acta encontrada
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la acta' });
    }
  });
  

module.exports = router;
