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
// const Foto = mongoose.model("NombreCollection", fotosSchema);

// const foto = new Foto({
//   "date": "2000-01-03",
//   "explanation": "The complex shell of a star seen to explode 300 years ago is helping astronomers to understand how that star exploded.  The above recently released image of supernova remnant Cassiopeia A (Cas A) shows unprecedented detail in three X-ray colors.  The relationship between brightness, color, and position of material in the image indicates where in the star this material was just before the explosion.  Bright knots on the left, for example, contain little iron, and so are hypothesized to originated from a higher layer than outer red filaments, which are iron rich.  The blue region on the right is seen through absorbing dust,  and so appears depleted of low-energy X-rays.  It takes light ten years to cross the gas shell of the Cas A supernova remnant, which is 10,000 light-years distant. Most of the elements that make people and planets were produced in supernova explosions.",
//   "hdurl": "https://apod.nasa.gov/apod/image/0001/casa_chandra_big.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "Cas A Supernova Remnant in X-Rays",
//   "url": "https://apod.nasa.gov/apod/image/0001/casa_chandra.jpg"
// });

// foto.save();


const personaSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  FotoPreferida: fotosSchema
})

const Persona = mongoose.model("Persona", personaSchema)

const persona = new Persona({
  name: "Bulma",
  age: 34,
  FotoPreferida:""
})
 persona.save()

 // NO ME FUNCIONA ME DA UN ERROR