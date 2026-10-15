//Comento esta parte porque me cuesta mantener un orden mental del flujo

//Importación de librerias y rutas
const express = require("express");
const connect = require("./src/config/db");
const vinylRoutes = require("./src/routes/vinyl.routes");

// Crear servidor y parsear para usar json
const server = express();
server.use(express.json());

// Llamar a la conexión
connect();
server.use((req, res, next) => {
  console.log("INSOMNIA ESTÁ PIDIENDO:", req.method, req.url);
  next();
});

// Enrutamiento principal y conexión no encontrada
server.use("/vinyls", vinylRoutes);

server.use((req, res) => {
  return res.status(404).json({ message: "Ruta no encontrada" });
});

// Levantar servidor en el puerto local

server.listen(8080, () => {
  console.log("Servidor levantado en http://localhost:8080");
});
