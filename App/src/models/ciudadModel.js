const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    ciudad:String,
    codigoDane:String,
    departamento_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Departamento'
      },
})

const Ciudad = mongoose.model('Ciudad', ciudadSchema);

module.exports = Ciudad;