const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); 

const app = express();


app.use(cors()); 
app.use(express.json()); 

// Conexión con MongoDB Atlas
console.log(process.env.MONGO_URI)
console.log(process.env.PORT)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar con MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Server Prendido');
});

// Rutas
const actasRoutes = require('./routes/actas'); 
app.use('/api', actasRoutes); 

// Escuchar en un puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
