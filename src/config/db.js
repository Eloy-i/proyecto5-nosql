const mongoose = require("mongoose");

const connect = async () => {
  try {
    console.log("Conectando a base de datos");

    await mongoose.connect("mongodb://localhost:27017/vinyl_collection");

    console.log("Conexión con base de datos realizada");
  } catch (error) {
    console.error("Error al conectarse a la base de datos", error.message);
  }
};

module.exports = connect;
