require('dotenv').config();
const Fincas = require('../../models/fincaModel');


const createFincas = async (
  nombre,
  imagen,
  ubicacion,
  ciudad,
  departamento,
  productorId 
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingFincas = await Fincas.findOne({ nombre });
   
    if (existingFincas) {
      return {
        success: false,
        message: 'La Finca ya existe.'
      };
    }

    const newFincas = new Fincas({
      nombre: nombre,
      imagen:imagen,
      ubicacion: ubicacion,
      ciudad: ciudad,
      departamento: departamento,
      ubicacion: ubicacion,
      productor: productorId
    });
    
    await newFincas.save();
    
    return {
      success: true,
      message: 'Finca creada exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Fincas:', error);
    return { success: false, message: 'Error al crear la Finca.' };
  }
};


module.exports = {
  createFincas,
};
