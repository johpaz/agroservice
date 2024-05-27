const {Router}= require('express');

const {handleCreateProductos} = require('../handler/productosHandler');
const {getAllProductos} = require('../controllers/productos/getProductos')
const {getProductosById} = require('../controllers/productos/getProductos')
const {updateProductos} = require('../controllers/productos/getProductos')

const productoRouter = Router();

// Ruta para manejar la autenticación
productoRouter.post('/', handleCreateProductos);
productoRouter.get('/', getAllProductos);
productoRouter.get('/:id', getProductosById);
productoRouter.put('/:id', updateProductos);

module.exports = productoRouter;
