
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nasaDB", { useUnifiedTopology: true, useNewUrlParser: true });


// mongoose.connect('mongodb+srv://nacho:klingon@cluster0.ldmkf.mongodb.net/nasaDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


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
const FotoDos = mongoose.model("NombreCollection", fotosSchema);

// ------------------------
// Insertar solo un objeto
// ------------------------

// const foto = new Foto({
//   "date": "2000-01-01",
//   "explanation": "Welcome to the millennial year at the threshold of millennium three.  During millennium two, humanity continually redefined its concept of \"Universe\": first as spheres centered on the Earth, in mid-millennium as the Solar System, a few centuries ago as the Galaxy, and within the last century as the matter emanating from the Big Bang.  During millennium three humanity may hope to discover alien life, to understand the geometry and composition of our present concept of Universe, and even to travel through this Universe.  Whatever our accomplishments, humanity will surely find adventure and discovery in the space above and beyond, and possibly define the surrounding Universe in ways and colors we cannot yet imagine by the threshold of millennium four.",
//   "hdurl": "https://apod.nasa.gov/apod/image/0001/flammarion_halfcolor.gif",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Millennium that Defines Universe",
//   "url": "https://apod.nasa.gov/apod/image/0001/flammarion_halfcolor_big.gif"
// });

// foto.save();



// ---------------
// Array 
// ----------------
var arr = [
  {
    "date": "2000-01-02",
    "explanation": "There, that faint dot in the center - that's the largest rock known.  It is larger than every known asteroid, moon, and comet nucleus.  It is larger than any other rocky planet.  (Nobody knows for sure what size rocks lie at the cores of Jovian planets, or orbit other stars.)  The Voyager 1 spacecraft took this picture in 1990 from the outer Solar System.  This rock is so large its gravity makes it nearly spherical, and holds heavy gases near its surface.  Yesterday, this rock started another orbit around its parent star, for roughly the 5 billionth time, spinning over 350 times during each trip.  Happy Gregorian Calendar New Year to all the human inhabitants of this rock we call Earth.",
    "hdurl": "https://apod.nasa.gov/apod/image/0001/earth_vg1.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Largest Rock Known",
    "url": "https://apod.nasa.gov/apod/image/0001/earth_vg1_big.jpg"
  },
  {
    "date": "2000-01-03",
    "explanation": "The complex shell of a star seen to explode 300 years ago is helping astronomers to understand how that star exploded.  The above recently released image of supernova remnant Cassiopeia A (Cas A) shows unprecedented detail in three X-ray colors.  The relationship between brightness, color, and position of material in the image indicates where in the star this material was just before the explosion.  Bright knots on the left, for example, contain little iron, and so are hypothesized to originated from a higher layer than outer red filaments, which are iron rich.  The blue region on the right is seen through absorbing dust,  and so appears depleted of low-energy X-rays.  It takes light ten years to cross the gas shell of the Cas A supernova remnant, which is 10,000 light-years distant. Most of the elements that make people and planets were produced in supernova explosions.",
    "hdurl": "https://apod.nasa.gov/apod/image/0001/casa_chandra_big.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Cas A Supernova Remnant in X-Rays",
    "url": "https://apod.nasa.gov/apod/image/0001/casa_chandra.jpg"
  }
]

//-------------------
// insertar objetos del archivo
//--------------------

// console.log(fotakus)

FotoDos.insertMany(arr, function (error) {
  if (error) {
    console.log(error)
  } else {
      mongoose.connection.close() // cerrar la conexion con mongodb
    console.log("Se añadieron items nuevos")
  }
})


// ------------------
// BUSCAR obj en DB
// ------------------

// Foto.find(function(err, items) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(items)
//   }
// });

// ------------------
// BUSCAR solo el title
// ------------------
// Foto.find(function(err, items) {
//     if (err) {
//       console.log(err)
//     } else {
//       mongoose.connection.close() // cerrar la conexion con mongodb
//       // console.log(items)
//       items.forEach(function(item){
//         console.log(item.title, item._id)
//       })
//     }
//   });