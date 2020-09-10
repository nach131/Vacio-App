const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nasaDB", { useUnifiedTopology: true, useNewUrlParser: true });


const personaSchema = new mongoose.Schema({
  name: String,
  age: Number,
  FotoPreferida: fotosSchema
})

const Persona = mongoose.model("Persona", personaSchema)

Persona.updateOne({ name: "Pablo" },
  { FotoPreferida: "X-rays From The Cat's Eye" },
  function (err) {
    if (err) {
      console.log(err)
    } else {
      mongoose.connection.close() // cerrar la conexion con mongodb

      console.log("Se actualizo ok")
    }
  })

 // NO ME FUNCIONA ME DA UN ERROR