const mongoose = require('mongoose');

const fincaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  imagen:String,
  ubicacion: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number], 
      default: [0, 0],
    },
  },
  ciudad: String,
  departamento: String,
  productor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Productor',
    required: true,
  },
});

fincaSchema.index({ ubicacion: '2dsphere' });

const Finca = mongoose.model('Finca', fincaSchema);

module.exports = Finca;
