const express = require('express')
const authRouter = express.Router()
const {validateCreateUser, handleRegister } = require('../handler/registerHandler')
const loginHandler = require('../handler/loginHandler')


authRouter.post('/register', validateCreateUser, handleRegister);
authRouter.get('/login', loginHandler)

module.exports= authRouter