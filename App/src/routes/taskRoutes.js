const {Router}= require('express');

const {updateTaskStatus} = require('../controllers/tasks/updateTasks'); // Asumiendo que aquí está tu handler
const {getAllTasks} = require('../controllers/tasks/updateTasks')

const tasksRouter = Router();

// Ruta para manejar la autenticación
tasksRouter.put('/', updateTaskStatus);
tasksRouter.get('/', getAllTasks);

module.exports = tasksRouter;
