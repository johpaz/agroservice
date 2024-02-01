const {Router}= require('express');

const {validateCreateProductor,handleCreateProductor} = require('../handler/productorHandler');
const {getAllProductor} = require('../controllers/productor/getProdutores')
const {getProductorById} = require('../controllers/productor/getProdutores')
const {updateProductor} = require('../controllers/productor/getProdutores')

const productorRouter = Router();

// Ruta para manejar la autenticación
productorRouter.post('/', validateCreateProductor,handleCreateProductor);
productorRouter.get('/', getAllProductor);
productorRouter.get('/:id', getProductorById);
productorRouter.put('/:id', updateProductor);

module.exports = productorRouter;
