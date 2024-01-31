const User = require('../../models/userModel');
const Role = require('../../models/roleModel'); 

// Controlador para registrar un nuevo usuario
const registerUser = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;
      // Verificar si el rol existe
    const role = await Role.findOne({ _id: roleId });
    if (!role) {
      return res.status(400).json({ error: 'Rol no encontrado' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ name, email, password, role: role._id });
    const savedUser = await newUser.save();

    return res.status(201).json({ success: true, message: 'Usuario creado exitosamente', user: savedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { registerUser };
