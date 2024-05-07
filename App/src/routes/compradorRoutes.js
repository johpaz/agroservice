const {Router}= require('express');

// const {handleCreateComprador,validateCreateComprador} = require('../handler/compradorHandler');
const {getAllComprador} = require('../controllers/comprador/getComprador')
const {getCompradorById} = require('../controllers/comprador/getComprador')
const {updateComprador} = require('../controllers/comprador/getComprador')

const compradorRouter = Router();

// Ruta para manejar la autenticación
// compradorRouter.post('/', validateCreateComprador,handleCreateComprador);
compradorRouter.get('/', getAllComprador);
compradorRouter.get('/:id', getCompradorById);
compradorRouter.put('/:id', updateComprador);

module.exports = compradorRouter;
