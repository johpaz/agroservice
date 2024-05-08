const mongoose = require('mongoose')

const departamentoSchema = new mongoose.Schema({
    departamento:String,
    codigoDane:String,
})

const Departamento = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamento;