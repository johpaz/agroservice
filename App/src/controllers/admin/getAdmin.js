const mongoose = require('mongoose');
const Admin = require('../../models/adminModel'); 


const getAllAdmin = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const admin = await Admin.find();
  
      return res.status(200).json({ admin });
    } catch (error) {
      console.error('Error al obtener los Admins:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Admin.' });
    }
  };

  const getAdminById = async (id) => {
      const admin = await Admin.findById(id);

      // Verifica si el Admin existe
      if (!admin) throw Error ( 'Admin no encontrado.' )
     
     
    return admin
    
  };
  
  const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el Admin por ID
      const admin = await Admin.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Admin existe
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin no encontrado.' });
      }
  
      return res.status(200).json({ success: true, Admin });
    } catch (error) {
      console.error('Error al actualizar el Admin:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Admin.' });
    }
  };

  
  module.exports ={
    getAllAdmin,
    getAdminById,
    updateAdmin
  }