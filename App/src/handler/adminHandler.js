const { createAdmin } = require('../controllers/admin/adminController');

const handleAdminCreate = async (req, res) => {
  const {
      nombre,
      email,
      role,
      image
 } = req.body;
  
  // Convertir la cadena de texto de fecha a un objeto de tipo Date
  const fechaPublicacionDate = new Date();
  try {
    // Llamar a la función para crear el blog
    const admin = await createAdmin({
      nombre,
      email,
      role,
      image
  }
    );
    res.status(200).json(admin);
    
  } catch (error) {
    console.error('Error al crear el blog en handler:', error);
    // Devolver una respuesta de error en caso de problemas al crear el blog
    res.status(500).json({
      success: false,
      message: 'Error al crear el blog en el handler.',
      error: error.message
    });
  }
};

module.exports = {
  handleAdminCreate
};
