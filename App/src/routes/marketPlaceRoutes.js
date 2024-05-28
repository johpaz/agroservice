const {Router}= require('express');
const {handlerCreateProduct, getAllProducts, getUserProducts, editProduct} = require('../handler/marketPlaceHandler')


const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.get('/allProducts', getAllProducts)
marketPlaceRouter.get('/userProducts/:id', getUserProducts)
marketPlaceRouter.post('/createProducto', handlerCreateProduct)
marketPlaceRouter.put('/updateProduct/:id', editProduct)


module.exports= marketPlaceRouter;