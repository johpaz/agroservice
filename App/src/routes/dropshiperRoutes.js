const {Router}= require('express');

const {getAllDropshiper, getDropshiperById, updateDropshiper } = require('../controllers/dropshiper/getDropshiper');

const dropshiperRouter = Router();


dropshiperRouter.get('/',getAllDropshiper );
dropshiperRouter.get('/:id',getDropshiperById );
dropshiperRouter.put('/:id',updateDropshiper );

module.exports = dropshiperRouter;
