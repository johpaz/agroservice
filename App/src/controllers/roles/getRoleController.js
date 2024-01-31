const Role = require('../../models/roleModel');

// Controlador para obtener todos los roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  getAllRoles,
};
