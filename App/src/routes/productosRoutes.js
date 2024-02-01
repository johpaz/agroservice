const {Router}= require('express');

const {createProducto} = require('../controllers/productos/productosController');
const {getAllProductos} = require('../controllers/productos/getProductos')
const {getProductosById} = require('../controllers/productos/getProductos')
const {updateProductos} = require('../controllers/productos/getProductos')

const productoRouter = Router();

// Ruta para manejar la autenticación
productoRouter.post('/', createProducto);
productoRouter.get('/', getAllProductos);
productoRouter.get('/:id', getProductosById);
productoRouter.put('/:id', updateProductos);

module.exports = productoRouter;
