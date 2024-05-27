const {Router}= require('express');
const {handlerCreateProduct, getAllProducts, getUserProducts} = require('../handler/marketPlaceHandler')


const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.get('/allProducts', getAllProducts)
marketPlaceRouter.get('/userProducts/:id', getUserProducts)
marketPlaceRouter.post('/createProducto', handlerCreateProduct)


module.exports= marketPlaceRouter;