const {Router}= require('express');

const {createFincas} = require('../controllers/fincas/fincasController');
const {getAllFincas} = require('../controllers/fincas/getFincas')
const {getFincasById} = require('../controllers/fincas/getFincas')
const {updateFincas} = require('../controllers/fincas/getFincas')

const fincasRouter = Router();

// Ruta para manejar la autenticación
fincasRouter.post('/', createFincas);
fincasRouter.get('/', getAllFincas);
fincasRouter.get('/:id', getFincasById);
fincasRouter.put('/:id', updateFincas);

module.exports = fincasRouter;
