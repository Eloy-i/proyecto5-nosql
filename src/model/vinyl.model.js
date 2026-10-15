const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GENRES = [
  "Heavy Metal",
  "Progressive Metal",
  "Progressive Rock",
  "Extreme Metal",
  "Power Metal",
  "Hard Rock",
  "Instrumental Rock",
  "Pop",
  "Psychodelic Rock",
  "Art Rock",
  "Alternative Metal",
  "Psychedelic Rock",
  "Quantum Physics Metal",
];

const FORMATS = ["LP", "EP", "Single"];

const REGIONS = ["USA", "EU", "UK", "JAP"];

// TODO - No te voy a aburrir metiendo mil datos y lo dejo así por el momento, suficiente para catalogar una colección. Pero me guardo el añadir duración, tipo de edición (Gatefold, LP Doble...) y un segundo esquema embebido para meter las canciones con sus datos propios.

const vinylSchema = new Schema(
  {
    artist: { type: String, required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true, enum: GENRES },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, required: false, min: 0, max: 10 },
    pressingYear: { type: Number, required: false },
    regionEdition: { type: String, required: false, enum: REGIONS },
    hasObi: { type: Boolean, default: false },
    format: { type: String, required: true, enum: FORMATS },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Vinyl = mongoose.model("Vinyl_Collection", vinylSchema);

module.exports = Vinyl;
