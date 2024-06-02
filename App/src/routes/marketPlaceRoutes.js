const {Router}= require('express');
const {handlerCreateProduct, getAllProducts, getUserProducts, editProduct,handlerCreatePedido} = require('../handler/marketPlaceHandler')
const {getProductsById,deleteProductoMarketPlace} = require('../controllers/marketplace/getProductsMarketPlace')
const {getPedidosByUserId} =require('../controllers/marketplace/getPedidosByUser')
const {getAllPedidos} = require('../controllers/marketplace/getPedidos')

const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.get('/pedidoUser/:id', getPedidosByUserId)
marketPlaceRouter.get('/pedido', getAllPedidos)
marketPlaceRouter.post('/pedido', handlerCreatePedido)
marketPlaceRouter.get('/allProducts', getAllProducts)
marketPlaceRouter.delete('/:id', deleteProductoMarketPlace)
marketPlaceRouter.get('/userProducts/:id', getUserProducts)
marketPlaceRouter.get('/:id', getProductsById)
marketPlaceRouter.post('/createProducto', handlerCreateProduct)
marketPlaceRouter.put('/updateProduct/:id', editProduct)


module.exports= marketPlaceRouter;