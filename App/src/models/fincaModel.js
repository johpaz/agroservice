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
  agricultor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductorCampesino',
    required: true,
  },
});

fincaSchema.index({ ubicacion: '2dsphere' });

const Finca = mongoose.model('Finca', fincaSchema);

module.exports = Finca;
