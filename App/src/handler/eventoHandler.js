const { createEvento } = require('../controllers/eventos/eventoController');

const handleEventoCreate = async (req, res) => {
  const {
    titulo,
    detalle,
    fecha,
    urlLink,
    lugar,
    urlImage
    
  } = req.body;
  
  
  try {
    // Llamar a la función para crear el blog
    const blog = await createEvento({
    titulo,
    detalle,
    fecha,
    urlLink,
    lugar,
    urlImage
    }
    );
    res.status(200).json(blog);
    
  } catch (error) {
    console.error('Error al crear el evento en handler:', error);
    // Devolver una respuesta de error en caso de problemas al crear el evento
    res.status(500).json({
      success: false,
      message: 'Error al crear el evento en el handler.',
      error: error.message
    });
  }
};

module.exports = {
  handleEventoCreate
};
