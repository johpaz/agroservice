const {Router}= require('express');

const createRole = require('../controllers/roles/roleController'); // Asumiendo que aquí está tu handler
const {getAllRoles} = require('../controllers/roles/getRoleController')

const roleRouter = Router();

// Ruta para manejar la autenticación
roleRouter.post('/', createRole);
roleRouter.get('/', getAllRoles);

module.exports = roleRouter;
