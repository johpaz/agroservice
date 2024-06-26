// const { validationResult, body } = require('express-validator');
const { createProductor } = require('../controllers/productor/productorController');

// const validateCreateProductor = [
//   body('nit').notEmpty().withMessage('El campo NIT es obligatorio.'),
//   body('nombre').notEmpty().withMessage('El campo nombre es obligatorio.'),
//   body('direccion').notEmpty().withMessage('El campo dirección es obligatorio.'),
//   body('telefono').notEmpty().withMessage('El campo teléfono es obligatorio.'),
//   body('ciudad').notEmpty().withMessage('El campo ciudad es obligatorio.'),
//   body('departamento').notEmpty().withMessage('El campo departamento es obligatorio.'),
//   body('email')
//     .notEmpty().withMessage('El campo email es obligatorio.')
//     .isEmail().withMessage('El campo email debe ser una dirección de correo electrónico válida.'),
//   body('password')
//     .notEmpty().withMessage('El campo contraseña es obligatorio.')
//     .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
//     body('role').notEmpty().withMessage('El campo role es obligatorio.')

// ];


const handleCreateProductor = async (data) => {
  // Manejar errores de validación utilizando el middleware handleValidationErrors
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json("errores aqui",{ errors: errors.array() });
  // }

  // Extraer datos del cuerpo de la solicitud
  const {
    nit,
    nombre,
    imagen,
    direccion,
    telefono,
    ciudad,
    departamento,
    ubicacion,
    email,
    password,
    role
  } = data;

  try {
    // Llamar a tu función para crear el perfil del productor
    const result = await createProductor(
      nit,
      nombre,
      imagen,
      direccion,
      telefono,
      ciudad,
      departamento,
      ubicacion,
      email,
      password,
      role
    );

    // Devolver una respuesta exitosa
    if(result) return result
    // return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    // Devolver una respuesta de error en caso de problemas al crear el perfil
    return {error}
  }
};


module.exports = {handleCreateProductor}
