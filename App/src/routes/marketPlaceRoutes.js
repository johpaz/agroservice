const {Router}= require('express');
const {handlerCreateProduct, getAllProducts, getUserProducts, editProduct} = require('../handler/marketPlaceHandler')
const {getProductsById,deleteProductoMarketPlace} = require('../controllers/marketplace/getProductsMarketPlace')

const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.get('/allProducts', getAllProducts)
marketPlaceRouter.delete('/', deleteProductoMarketPlace)
marketPlaceRouter.get('/userProducts/:id', getUserProducts)
marketPlaceRouter.get('/:id', getProductsById)
marketPlaceRouter.post('/createProducto', handlerCreateProduct)
marketPlaceRouter.put('/updateProduct/:id', editProduct)


module.exports= marketPlaceRouter;