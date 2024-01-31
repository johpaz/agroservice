const Status = require('../../models/statusModel');

// Controlador para obtener todos los roles
const getAllStatus = async (req, res) => {
  try {
    const status = await Status.find();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  getAllStatus,
};
