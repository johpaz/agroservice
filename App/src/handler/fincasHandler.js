const { validationResult, body } = require('express-validator');
const { createFincas } = require('../controllers/fincas/fincasController');

const validateCreateFincas = [
  body('nombre').notEmpty().withMessage('El campo nombre es obligatorio.'),
  body('imagen').notEmpty().withMessage('El campo imagen es obligatorio.'),
  body('ciudad').notEmpty().withMessage('El campo ciudad es obligatorio.'),
  body('departamento').notEmpty().withMessage('El campo departamento es obligatorio.'),
  body('ubicacion').notEmpty().withMessage('El campo departamento es obligatorio.'),
  body('productor').notEmpty().withMessage('El campo productor es obligatorio.'),
  
];


const handleCreateFincas = async (req, res) => {
  // Manejar errores de validación utilizando el middleware handleValidationErrors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json("errores aqui",{ errors: errors.array() });
  }

  // Extraer datos del cuerpo de la solicitud
  const {
    nombre,
    imagen,
    ciudad,
    departamento,
    ubicacion,
    productorId,
    
  } = req.body;

  try {
    // Llamar a tu función para crear el perfil del Fincas
    const result = await createFincas(
      nombre,
      imagen,
      ciudad,
      departamento,
      ubicacion,
      productorId
    );

    // Devolver una respuesta exitosa
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear la finca', error);
    // Devolver una respuesta de error en caso de problemas al crear la finca
    return res.status(500).json({ message: 'Error al crear la finca.' });
  }
};


module.exports = {
  validateCreateFincas,
  handleCreateFincas,
};
