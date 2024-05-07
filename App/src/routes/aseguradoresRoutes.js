const {Router}= require('express');

// const {validateCreateAsegurador,handleCreateAsegurador} = require('../handler/aseguadorHandler');
const {getAllAseguradora} = require('../controllers/aseguradores/getAseguradores')
const {getAseguradoraById} = require('../controllers/aseguradores/getAseguradores')
const {updateAseguradora} = require('../controllers/aseguradores/getAseguradores')

const aseguradoraRouter = Router();

// Ruta para manejar la autenticación
// aseguradoraRouter.post('/', validateCreateAsegurador,handleCreateAsegurador);
aseguradoraRouter.get('/', getAllAseguradora);
aseguradoraRouter.get('/:id', getAseguradoraById);
aseguradoraRouter.put('/:id', updateAseguradora);

module.exports = aseguradoraRouter;
