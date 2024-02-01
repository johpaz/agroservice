const {Router}= require('express');

const {createTransportador} = require('../controllers/transportadores/transportadoresController');
const {getAllTransportador} = require('../controllers/transportadores/getTransportadores')
const {getTransportadorById} = require('../controllers/transportadores/getTransportadores')
const {updateTransportador} = require('../controllers/transportadores/getTransportadores')

const TransportadorRouter = Router();

// Ruta para manejar la autenticación
TransportadorRouter.post('/', createTransportador);
TransportadorRouter.get('/', getAllTransportador);
TransportadorRouter.get('/:id', getTransportadorById);
TransportadorRouter.put('/:id', updateTransportador);

module.exports = TransportadorRouter;
