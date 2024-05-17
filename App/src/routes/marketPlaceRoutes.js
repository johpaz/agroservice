const {Router}= require('express');
const handlerCreateProduct = require('../handler/marketPlaceHandler')

const marketPlaceRouter = Router()

//Rutas para el marketplace
marketPlaceRouter.post('/createProducto', handlerCreateProduct)
marketPlaceRouter.get('/allMarketplaceProducts', )

module.exports= marketPlaceRouter;