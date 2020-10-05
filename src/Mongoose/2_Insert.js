const fotakus = require('../datos/2000')

const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/nasaDB", { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connect('mongodb+srv://nacho:klingon@cluster0.ldmkf.mongodb.net/nasaDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


const fotosSchema = new mongoose.Schema({
  date: Date,
  explanation: String,
  hdurl: String,
  media_type: String,
  service_version: String,
  title: String,
  url: String
});

const Foto = mongoose.model("Foto", fotosSchema);

Foto.insertMany(fotakus, function (error) {
  if (error) {
    console.log(error)
  } else {
      mongoose.connection.close() // cerrar la conexion con mongodb
    console.log("Se añadieron items nuevos")
  }
})
