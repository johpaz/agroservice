// app/routes/indexRoute.js
const {Router}= require('express');

//const {loginRouter} = require('./loginRoutes')
const {  clienteNewPassword, clienteIdRouter, clienteRouter, clienteMasivoRouter, updateClienteIdRouter} = require('./clienteRoutes')
const roleRouter = require('./roleRoutes');
const { userRouter } = require('./userRoutes');
const statusRouter   = require('./statusRoutes')
const orderRouter = require('./orderRoutes')
const tasksRouter = require('./taskRoutes')


router = Router();  


router.use('/task', tasksRouter);
router.use('/order', orderRouter);
router.use('/status', statusRouter);
router.use('/newPassword', clienteNewPassword);
router.use('/updateCliente', updateClienteIdRouter);
router.use('/clientMas', clienteMasivoRouter);
router.use('/clientId', clienteIdRouter);
router.use('/role', roleRouter);
router.use('/client', clienteRouter);
//router.use('/login', loginRouter);
router.use('/user', userRouter)


module.exports = router;
