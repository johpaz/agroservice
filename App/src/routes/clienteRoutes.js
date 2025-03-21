const {Router}= require('express');

const { getAllCliente, getClienteById, updateCliente } = require('../controllers/cliente/getCliente');

const clienteRouter = Router();

// Ruta para manejar la autenticación
clienteRouter.get('/', getAllCliente);
clienteRouter.get('/:id', getClienteById);
clienteRouter.put('/:id', updateCliente);

module.exports = clienteRouter;
