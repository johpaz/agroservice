const {Router}= require('express');

// const {validateCreateAsegurador,handleCreateAsegurador} = require('../handler/aseguadorHandler');
const {getUserById} = require('../controllers/userLogin/getUser')


const userRouter = Router();

// Ruta para manejar la autenticación

userRouter.get('/:id', getUserById);


module.exports = userRouter;
