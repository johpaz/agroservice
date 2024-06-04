const {Router}= require('express');
const {handlerCreateProduct, getAllProducts,  editProduct,handlerCreatePedido} = require('../handler/marketPlaceHandler')
const {getProductsById,deleteProductoMarketPlace,} = require('../controllers/marketplace/getProductsMarketPlace')
const {getPedidosByUserId} =require('../controllers/marketplace/getPedidosByUser')
const {getAllPedidos} = require('../controllers/marketplace/getPedidos')
const getProductsByUserId = require('../controllers/marketplace/getProductsByUserId')
const {getComprasByUserId} = require('../controllers/marketplace/getComprasByUser')

const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.get('/comprasUser/:id', getComprasByUserId)
marketPlaceRouter.get('/pedidoUser/:id', getPedidosByUserId)
marketPlaceRouter.get('/pedido', getAllPedidos)
marketPlaceRouter.post('/pedido', handlerCreatePedido)
marketPlaceRouter.get('/allProducts', getAllProducts)
marketPlaceRouter.delete('/:id', deleteProductoMarketPlace)
marketPlaceRouter.get('/userProducts/:id', getProductsByUserId)
marketPlaceRouter.get('/:id', getProductsById)
marketPlaceRouter.post('/createProducto', handlerCreateProduct)
marketPlaceRouter.put('/updateProduct/:id', editProduct)


module.exports= marketPlaceRouter;