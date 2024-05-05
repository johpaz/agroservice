// app/routes/indexRoute.js
const {Router}= require('express');

//const {loginRouter} = require('./loginRoutes')
const roleRouter = require('./roleRoutes');
const aseguradoraRouter = require('./aseguradoresRoutes')
const compradorRouter = require('./compradorRoutes')
const productorRouter = require('./productorRoutes')
const transportadorRouter = require('./transportadoresRoute')
const productoRouter = require('./productosRoutes')
const categoriaRouter = require('./categoriaRoutes')
const ofertasroutes = require('./publicacionRoutes')
const perfilRouter = require('./perfilRoutes')

router = Router();  

router.use('/perfil', perfilRouter);
router.use('/publicacion', ofertasroutes);
router.use('/categoria', categoriaRouter);
router.use('/transportador', transportadorRouter);
router.use('/producto', productoRouter);
router.use('/productor', productorRouter);
router.use('/comprador', compradorRouter);
router.use('/aseguradora', aseguradoraRouter);
router.use('/role', roleRouter);



module.exports = router;
