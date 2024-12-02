const mongoose = require('mongoose');

const actaSchema = new mongoose.Schema({
  DatosPersonales: {
    curp: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    sexo: String,
    fechaNacimiento: Date,
    lugarNacimiento: String,
  },
  DatosPadre: {
    padre:{curp: String,
        nombre: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        nacionalidad: String},
  },
  DatosMadre: {
    madre:{curp: String,
        nombre: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        nacionalidad: String},
    
  },
  DatosAdministrativos: {
    numeroCertificadoNacimiento: String,
    entidadRegistro: String,
    municipioRegistro: String,
    oficialia: String,
    fechaRegistro: Date,
    libro: String,
    numeroActa: String,
    anotacionesMarginales: String,
    certificaciones: String,
  },
});

module.exports = mongoose.model('Acta', actaSchema);
