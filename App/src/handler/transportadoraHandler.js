const { validationResult, body } = require('express-validator');
const { createTransportador } = require('../controllers/transportadores/transportadoresController');

const validateCreateTransportador = [
  body('nit').notEmpty().withMessage('El campo NIT es obligatorio.'),
  body('nombre').notEmpty().withMessage('El campo nombre es obligatorio.'),
  body('direccion').notEmpty().withMessage('El campo dirección es obligatorio.'),
  body('telefono').notEmpty().withMessage('El campo teléfono es obligatorio.'),
  body('ciudad').notEmpty().withMessage('El campo ciudad es obligatorio.'),
  body('departamento').notEmpty().withMessage('El campo departamento es obligatorio.'),
  body('email')
    .notEmpty().withMessage('El campo email es obligatorio.')
    .isEmail().withMessage('El campo email debe ser una dirección de correo electrónico válida.'),
  body('password')
    .notEmpty().withMessage('El campo contraseña es obligatorio.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
];


const handleCreateTransportador = async (req, res) => {
  // Manejar errores de validación utilizando el middleware handleValidationErrors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extraer datos del cuerpo de la solicitud
  const {
    nit,
    nombre,
    direccion,
    telefono,
    ciudad,
    departamento,
    email,
    password,
    ubicacion
  } = req.body;

  try {
    // Llamar a tu función para crear el perfil del Transportador
    const result = await createTransportador(
      nit,
      nombre,
      direccion,
      telefono,
      ciudad,
      departamento,
      email,
      password,
      ubicacion
    );

    // Devolver una respuesta exitosa
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    // Devolver una respuesta de error en caso de problemas al crear el perfil
    return res.status(500).json({ message: 'Error al crear el perfil.' });
  }
};


module.exports = {
  validateCreateTransportador,
  handleCreateTransportador,
};
