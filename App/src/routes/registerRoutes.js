const express = require('express')
const registerRouter = express.Router()
const {validateCreateUser, handleRegister } = require('../handler/registerHandler')



registerRouter.post('/', validateCreateUser, handleRegister);

module.exports= registerRouter