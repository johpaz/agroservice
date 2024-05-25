const Role = require('../../models/roleModel');

// Controlador para obtener todos los roles
const getAllRoles = async (req, res) => {
  try {
    let roles = await Role.find();
    // Filtrar el rol 'Administrador' si está presente
    roles = roles.filter(role => role.name !== 'Administrador');
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


module.exports = {
  getAllRoles,
};
