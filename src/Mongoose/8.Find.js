const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nasaDB", { useUnifiedTopology: true, useNewUrlParser: true });

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

// ------------------
// BUSCAR solo el title
// ------------------
Foto.find(function(err, items) {
    if (err) {
      console.log(err)
    } else {
      mongoose.connection.close() // cerrar la conexion con mongodb
      // console.log(items)
      items.forEach(function(item){
        console.log(item.title)
      })
    }
  });