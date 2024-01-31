const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nit: { type: String, required: true, unique: true },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
