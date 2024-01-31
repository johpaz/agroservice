const {Router}= require('express');

const createStatus = require('../controllers/status/statusController'); // Asumiendo que aquí está tu handler
const {getAllStatus} = require('../controllers/status/getStatusController')

const statusRouter = Router();

// Ruta para manejar la autenticación
statusRouter.post('/', createStatus);
statusRouter.get('/', getAllStatus);

module.exports = statusRouter;
