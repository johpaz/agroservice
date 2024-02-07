const {Router}= require('express');

const getPerfilByEmail = require('../controllers/busquedaEmail/busquedaEmailController')

const perfilRouter = Router();

// Ruta para manejar la autenticación
perfilRouter.get('/:email', getPerfilByEmail);


module.exports = perfilRouter;
