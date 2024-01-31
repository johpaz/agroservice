const {Router}= require('express');

const {registerUser } = require('../controllers/user/userController'); 
const { getAllUsers} = require('../controllers/user/getAllUserController')

const userRouter = Router();

// Ruta para manejar la autenticación
userRouter.post('/', registerUser)
userRouter.get('/', getAllUsers)


module.exports = {
    userRouter,
 };
