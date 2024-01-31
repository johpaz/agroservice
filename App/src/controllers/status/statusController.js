const Status = require('..//../models/statusModel');

const createStatus = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    // Verificar si el rol ya existe
    const existingStatus = await Status.findOne({ name });
    if (existingStatus) {
      return res.status(400).json({ message: 'El rol ya existe' });
    }

    // Crear un nuevo rol
    const newStatus = new Status({
      name,
      permissions
    });

    await newStatus.save();
    res.status(201).json({ success: true, message: 'Status creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el rol', error);
    res.status(500).json({ success: false, message: 'Error al crear el rol' });
  }
};

module.exports = createStatus;
