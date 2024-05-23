const {Router}= require('express');

const {handleCreateCategoria} = require('../handler/categoriasHandler');
const {getAllCategoria} = require('../controllers/categorias/getCategorias')
const {getCategoriaById} = require('../controllers/categorias/getCategorias')
const {updateCategoria} = require('../controllers/categorias/getCategorias')

const CategoriaRouter = Router();

// Ruta para manejar la autenticación
CategoriaRouter.post('/', handleCreateCategoria);
CategoriaRouter.get('/', getAllCategoria);
CategoriaRouter.get('/:id', getCategoriaById);
CategoriaRouter.put('/:id', updateCategoria);

module.exports = CategoriaRouter;
