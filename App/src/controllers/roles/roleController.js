const Role = require('..//../models/roleModel');

const createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    // Verificar si el rol ya existe
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: 'El rol ya existe' });
    }

    // Crear un nuevo rol
    const newRole = new Role({
      name,
      permissions
    });

    await newRole.save();
    res.status(201).json({ success: true, message: 'Rol creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el rol', error);
    res.status(500).json({ success: false, message: 'Error al crear el rol' });
  }
};

module.exports = createRole;
