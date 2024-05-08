const express = require('express')
const authRouter = express.Router()
const {validateCreateUser, handleRegister } = require('../handler/registerHandler')
const loginHandler = require('../handler/loginHandler')


authRouter.post('/register', validateCreateUser, handleRegister);
authRouter.post('/login', loginHandler)

module.exports= authRouter