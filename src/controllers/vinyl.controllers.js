const Vinyl = require("../model/vinyl.model");

const getAllVinyls = async (req, res) => {
  try {
    const vinyls = await Vinyl.find();
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo colección de discos",
      error: error.message,
    });
  }
};

const getVinylById = async (req, res) => {
  try {
    const { id } = req.params;
    const vinyl = await Vinyl.findById(id);
    if (!vinyl) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ningún vinilo con ess id" });
    }
    return res.status(200).json(vinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo el disco mediante id",
      error: error.message,
    });
  }
};

const getVinylByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const vinyl = await Vinyl.findOne({ title });
    if (!vinyl) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ningún disco con ese nombre " });
    }
    return res.status(200).json(vinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo el disco",
      error: error.message,
    });
  }
};

const getVinylsByArtist = async (req, res) => {
  try {
    const { artist } = req.params;
    const vinyls = await Vinyl.find({ artist });

    if (vinyls.length === 0) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ningún disco del artista " });
    }
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo discos",
      error: error.message,
    });
  }
};

const getVinylsFromYear = async (req, res) => {
  try {
    const { releaseYear } = req.params;

    const vinyls = await Vinyl.find({ releaseYear: { $gte: releaseYear } });
    if (vinyls.length === 0) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ningún disco mas reciente" });
    }
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo discos",
      error: error.message,
    });
  }
};

const getVinylsByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const vinyls = await Vinyl.find({ genre });
    if (vinyls.length === 0) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ningún disco de ese genero" });
    }
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo discos",
      error: error.message,
    });
  }
};

const createVinyl = async (req, res) => {
  try {
    const newVinyl = new Vinyl(req.body);
    await newVinyl.save();
    return res.status(201).json(newVinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error creando nuevo disco",
      error: error.message,
    });
  }
};

const updateVinyl = async (req, res) => {
  try {
    const updateVinyl = await Vinyl.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateVinyl) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado el disco a actualizar" });
    }
    return res.status(200).json(updateVinyl);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error actualizando disco", error: error.message });
  }
};

const deleteVinyl = async (req, res) => {
  try {
    const vinyl = await Vinyl.findByIdAndDelete(req.params.id);
    if (!vinyl) {
      return res
        .status(404)
        .json({ message: "Error al encontrar el disco a borrar." });
    }
    return res.status(200).json(vinyl);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error borrando disco", error: error.message });
  }
};

module.exports = {
  getAllVinyls,
  getVinylById,
  getVinylByTitle,
  getVinylsByArtist,
  getVinylsFromYear,
  getVinylsByGenre,
  createVinyl,
  updateVinyl,
  deleteVinyl,
};
