const { validationResult, body } = require('express-validator');
const { createClient } = require('../controllers/cliente/clientController');

const validateCreateProfile = [
  body('name').notEmpty().withMessage('El campo name es obligatorio.'),
  body('nit').notEmpty().withMessage('El campo direccion es obligatorio.'), 
  
];

const handleCreateClient = async (req, res) => {
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    nit,
    
  } = req.body;

  try {
    const result = await createClient(
      name,
      nit,
      );
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    return res.status(500).json({ message: 'Error al crear el perfil.' });
  }
};


module.exports = {
  validateCreateProfile,
  handleCreateClient,

};
