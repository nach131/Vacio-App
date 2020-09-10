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

const FotoDos = mongoose.model("NombreCollection", fotosSchema);

FotoDos.deleteMany(
  { date: "2000-01-03 00:00:00.000Z" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close() // cerrar la conexion con mongodb
      console.log("Se borraron todos los registros")
    }
  }
)



