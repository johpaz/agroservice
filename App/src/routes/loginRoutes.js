const {Router}= require('express');
const {login}= require('../controllers/cliente/authController')
const { validateLoginData } = require('../middleware/validate');

const loginRouter = Router();

loginRouter.post('/', validateLoginData, login);


module.exports = {
    loginRouter,
};
