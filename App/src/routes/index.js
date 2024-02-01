// app/routes/indexRoute.js
const {Router}= require('express');

//const {loginRouter} = require('./loginRoutes')
const {  clienteNewPassword, clienteIdRouter, clienteRouter, clienteMasivoRouter, updateClienteIdRouter} = require('./clienteRoutes')
const roleRouter = require('./roleRoutes');
const aseguradoraRouter = require('./aseguradoresRoutes')
const compradorRouter = require('./compradorRoutes')
const { userRouter } = require('./userRoutes');
const productorRouter = require('./productorRoutes')
const transportadorRouter = require('./transportadoresRoute')
const productoRouter = require('./productosRoutes')
const categoriaRouter = require('./categoriaRoutes')
const ofertasroutes = require('./publicacionRoutes')


router = Router();  

router.use('/publicacion', ofertasroutes);
router.use('/categoria', categoriaRouter);
router.use('/transportador', transportadorRouter);
router.use('/producto', productoRouter);
router.use('/productor', productorRouter);
router.use('/comprador', compradorRouter);
router.use('/aseguradora', aseguradoraRouter);
router.use('/newPassword', clienteNewPassword);
router.use('/updateCliente', updateClienteIdRouter);
router.use('/clientId', clienteIdRouter);
router.use('/role', roleRouter);
router.use('/client', clienteRouter);
//router.use('/login', loginRouter);
router.use('/user', userRouter)


module.exports = router;
