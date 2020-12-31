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

const Foto = mongoose.model("Fotos", fotosSchema);

Foto.find(
  { date: { $gt: new Date('2000-01-04') } },
  function (err, item) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close() // cerrar la conexion con mongodb
      console.log(item)
    }
  }
)


//---------------------------------------
// Buscar todo
// Foto.find(function(err, items) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(items)
//   }
// });

