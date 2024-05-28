const {Router}= require('express');

const {handleEventoCreate} = require('../handler/eventoHandler');
const {getAllEvento} = require('../controllers/eventos/getEvento')
const {getEventoById} = require('../controllers/eventos/getEvento')
const {updateEvento} = require('../controllers/eventos/getEvento')

const eventoRouter = Router();


eventoRouter.post('/', handleEventoCreate);
eventoRouter.get('/', getAllEvento);
eventoRouter.get('/:id', getEventoById);
eventoRouter.put('/:id', updateEvento);

module.exports = eventoRouter;
