// app/routes/indexRoute.js
const {Router}= require('express');


const roleRouter = require('./roleRoutes');
const aseguradoraRouter = require('./aseguradoresRoutes')
const compradorRouter = require('./compradorRoutes')
const productorRouter = require('./productorRoutes')
const transportadorRouter = require('./transportadoresRoute')
const productoRouter = require('./productosRoutes')
const fincaRouter = require('./fincasRoutes')
const categoriaRouter = require('./categoriaRoutes')
const {ofertasRoutes,ofertasConsultaRoutes} = require('./publicacionRoutes')
const authRouter = require('./authRoutes')
const {ubicacionesRouter,ciudadesRouter} = require('./ubicacionesRoutes')
const marketPlaceRouter = require('./marketPlaceRoutes')
const userRouter = require('./userRoutes')
const blogRouter = require('./blogRoutes')
const eventoRouter = require('./eventosRoutes')
const adminRouter = require('./adminRoutes')


router = Router();  

router.use('/consultaOfertas', ofertasConsultaRoutes) 
router.use('/admin', adminRouter) 
router.use('/evento', eventoRouter) 
router.use('/blog', blogRouter) 
router.use('/user', userRouter) 
router.use('/auth', authRouter) 
router.use('/finca', fincaRouter);
router.use('/publicacion', ofertasRoutes);
router.use('/categoria', categoriaRouter);
router.use('/transportador', transportadorRouter);
router.use('/producto', productoRouter);
router.use('/productor', productorRouter);
router.use('/comprador', compradorRouter);
router.use('/aseguradora', aseguradoraRouter);
router.use('/role', roleRouter);
router.use('/uploadUbicaciones', ubicacionesRouter) //para cargar y traer las ciudades y departamentos
router.use('/ciudades', ciudadesRouter)
router.use('/marketplace', marketPlaceRouter)


module.exports = router;
