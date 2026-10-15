const mongoose = require("mongoose");

const vinyls = require("./src/model/vinyl.model");

const vinylsData = [
  {
    artist: "Black Sabbath",
    title: "Sabotage",
    genre: "Heavy Metal",
    releaseYear: 1975,
    pressingYear: 1975,
    regionEdition: "JAP",
    hasObi: true,
    format: "LP",
  },
  {
    artist: "Pain of Salvation",
    title: "In the passing light of day",
    genre: "Progressive Metal",
    releaseYear: 2017,
    pressingYear: 2017,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Pain of Salvation",
    title: "Remedy Lane",
    genre: "Progressive Metal",
    releaseYear: 2004,
    pressingYear: 2021,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Jethro Tull",
    title: "Thick as a Brick",
    genre: "Progressive Rock",
    releaseYear: 1972,
    regionEdition: "UK",
    format: "LP",
  },
  {
    artist: "Ozzy Osbourne",
    title: "Ozzmosis",
    genre: "Heavy Metal",
    releaseYear: 1995,
    pressingYear: 2025,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Devin Townsend Project",
    title: "Deconstruction",
    genre: "Extreme Metal",
    releaseYear: 2011,
    pressingYear: 2011,
    regionEdition: "USA",
    format: "LP",
  },
  {
    artist: "Faith No More",
    title: "Angel Dust",
    genre: "Alternative Metal",
    releaseYear: 1992,
    pressingYear: 2013,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Avantasia",
    title: "The Mystery of Time",
    genre: "Power Metal",
    releaseYear: 2013,
    format: "LP",
  },
  {
    artist: "Helloween",
    title: "Keeper of the Seven Keys Part II",
    genre: "Power Metal",
    releaseYear: 1988,
    format: "LP",
  },
  {
    artist: "Peter Gabriel",
    title: "Melt",
    genre: "Art Rock",
    releaseYear: 1980,
    pressingYear: 2024,
    regionEdition: "UK",
    format: "LP",
  },
  {
    artist: "The Aristocrats",
    title: "Culture Clash",
    genre: "Instrumental Rock",
    releaseYear: 2013,
    format: "LP",
  },
  {
    artist: "Tool",
    title: "Ænima",
    genre: "Progressive Metal",
    releaseYear: 1996,
    format: "LP",
  },
  {
    artist: "Meshuggah",
    title: "Catch Thirtythree",
    genre: "Extreme Metal",
    releaseYear: 2005,
    pressingYear: 2026,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Kate Bush",
    title: "Never for Ever",
    genre: "Art Rock",
    releaseYear: 1980,
    pressingYear: 2018,
    regionEdition: "EU",
    format: "LP",
  },
  {
    artist: "Nevermore",
    title: "This Godless Endeavor",
    genre: "Progressive Metal",
    releaseYear: 2005,
    format: "LP",
  },
  {
    artist: "Ozzy Osbourne",
    title: "Mr. Crowley",
    genre: "Heavy Metal",
    releaseYear: 1980,
    pressingYear: 1980,
    regionEdition: "UK",
    format: "Single",
  },

  {
    artist: "Conception",
    title: "My Dark Symphony",
    genre: "Progressive Metal",
    releaseYear: 2018,
    format: "EP",
  },

  {
    artist: "Dream Theater",
    title: "A Change of Seasons",
    genre: "Progressive Metal",
    releaseYear: 1995,
    format: "EP",
  },
  {
    artist: "Ghost",
    title: "Popestar",
    genre: "Hard Rock",
    releaseYear: 2016,
    format: "EP",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/vinyl_collection");
    await vinyls.deleteMany();
    await vinyls.insertMany(vinylsData);
    console.log("Ejecutando conexión");
  } catch (error) {
    console.error("Error ejecutando la semilla", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedDB();
