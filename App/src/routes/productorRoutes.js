const {Router}= require('express');

const {createProductor} = require('../controllers/productor/productorController');
const {getAllProductor} = require('../controllers/productor/getProdutores')
const {getProductorById} = require('../controllers/productor/getProdutores')
const {updateProductor} = require('../controllers/productor/getProdutores')

const productorRouter = Router();

// Ruta para manejar la autenticación
productorRouter.post('/', createProductor);
productorRouter.get('/', getAllProductor);
productorRouter.get('/:id', getProductorById);
productorRouter.put('/:id', updateProductor);

module.exports = productorRouter;
