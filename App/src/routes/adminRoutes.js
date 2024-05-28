const {Router}= require('express');

const {handleAdminCreate} = require('../handler/adminHandler');
const {getAllAdmin} = require('../controllers/admin/getAdmin')
const {getAdminById} = require('../controllers/admin/getAdmin')
const {updateAdmin} = require('../controllers/admin/getAdmin')

const adminRouter = Router();


adminRouter.post('/', handleAdminCreate);
adminRouter.get('/', getAllAdmin);
adminRouter.get('/:id', getAdminById);
adminRouter.put('/:id', updateAdmin);

module.exports = adminRouter;
