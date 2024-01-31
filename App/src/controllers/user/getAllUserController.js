const User = require('../../models/userModel');

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role', 'name'); // Populamos el campo 'role' con el nombre del rol

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios.' });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor al obtener usuarios.' });
  }
};

module.exports = {
  getAllUsers,
};
