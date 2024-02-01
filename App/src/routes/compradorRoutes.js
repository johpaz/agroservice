const {Router}= require('express');

const {createComprador} = require('../controllers/comprador/compradorController');
const {getAllComprador} = require('../controllers/comprador/getComprador')
const {getCompradorById} = require('../controllers/comprador/getComprador')
const {updateComprador} = require('../controllers/comprador/getComprador')

const compradorRouter = Router();

// Ruta para manejar la autenticación
compradorRouter.post('/', createComprador);
compradorRouter.get('/', getAllComprador);
compradorRouter.get('/:id', getCompradorById);
compradorRouter.put('/:id', updateComprador);

module.exports = compradorRouter;
