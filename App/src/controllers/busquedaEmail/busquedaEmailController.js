const mongoose = require('mongoose');
const Productor = require('../../models/productoresModel'); 
const Comprador = require('../../models/compradorModel'); 
const Asegurador = require('../../models/aseguradorasModel'); 
const Transportador = require('../../models/trasportadorModel'); 



const getPerfilByEmail = async (req, res) => {
    const { email } = req.params;
    
    try {
        // Buscar en el modelo Productor por email
        const productor = await Productor.findOne({ email: email });

        // Si no se encuentra el productor, buscar en otros modelos según sea necesario.
        if (!productor) {
            // Intenta buscar en el modelo Comprador
            const comprador = await Comprador.findOne({ email: email });

            if (comprador) {
                return res.status(200).json(comprador);
            }

            // Intenta buscar en el modelo Asegurador
            const asegurador = await Asegurador.findOne({ email: email });

            if (asegurador) {
                return res.status(200).json(asegurador);
            }

            // Intenta buscar en el modelo Transportador
            const transportador = await Transportador.findOne({ email: email });

            if (transportador) {
                return res.status(200).json(transportador);
            }

            // Si no se encuentra en ningún modelo, retorna un mensaje de error.
            return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
        }
    
        return res.status(200).json(productor);
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return res.status(500).json({ success: false, message: 'Error al buscar el usuario.' });
    }
}

module.exports = getPerfilByEmail