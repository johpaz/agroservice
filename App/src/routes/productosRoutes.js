const {Router}= require('express');

const {handleCreateProductos} = require('../handler/productosHandler');
const {getAllProductos} = require('../controllers/productos/getProductos')
const {getProductosById} = require('../controllers/productos/getProductos')
const {updateProductos} = require('../controllers/productos/getProductos')
const {productosuploadHandler} = require ('../handler/productoMasivoHandler')
const {categoriasMasivoHandler} = require ('../handler/categoriasMasivoHandler')
const {handleUploadCategorias,handleUploadProductos} = require('../middleware/handleUpload')

const productoRouter = Router();

// Ruta para manejar la autenticación
productoRouter.post('/categoriaMasivo', handleUploadCategorias,categoriasMasivoHandler);
productoRouter.post('/productosMasivo', handleUploadProductos,productosuploadHandler);
productoRouter.post('/', handleCreateProductos);
productoRouter.get('/', getAllProductos);
productoRouter.get('/:id', getProductosById);
productoRouter.put('/:id', updateProductos);

module.exports = productoRouter;
