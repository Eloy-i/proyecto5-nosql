const express = require("express");

const vinylsRouter = express.Router();

const {
  getAllVinyls,
  getVinylById,
  getVinylByTitle,
  getVinylsByArtist,
  getVinylsFromYear,
  getVinylsByGenre,
  createVinyl,
  updateVinyl,
  deleteVinyl,
} = require("../controllers/vinyl.controllers");

vinylsRouter.get("/", getAllVinyls);
vinylsRouter.get("/:id", getVinylById);
vinylsRouter.get("/title/:title", getVinylByTitle);
vinylsRouter.get("/artist/:artist", getVinylsByArtist);
vinylsRouter.get("/year/:releaseYear", getVinylsFromYear);
vinylsRouter.get("/genre/:genre", getVinylsByGenre);
vinylsRouter.post("/", createVinyl);
vinylsRouter.put("/:id", updateVinyl);
vinylsRouter.delete("/:id", deleteVinyl);

module.exports = vinylsRouter;
