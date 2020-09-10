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

FotoDos.updateOne(
  { _id: "5f5a1cc3be03c7105c6a739c" },
  { title: "Nombre updateOne" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Se actualizaron los datos Correctamente")
    }
  }
)



