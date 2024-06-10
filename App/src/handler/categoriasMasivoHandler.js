const Categorias = require('../models/categoriaModel');

const uploadController = require('../controllers/productos/uploadCategoriasController')


const categoriasMasivoHandler = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).send('No se proporcionó un archivo válido.');
        }
        const jsonData = await uploadController.convertBufferToJson(req.file.buffer);
        
        await Categorias.deleteMany({}); // Esto eliminará todos los registros, asegúrate de ajustar según tus necesidades
        
         await Promise.all(
            jsonData.map(async (sheet) => {
              const categoria = sheet.data.map(async (row) => {
                
                const nuevaCatergoria = new Categorias(row);
                return await nuevaCatergoria.save();
              });
              return await Promise.all(categoria);
            })
          );

        res.status(200).send('Datos cargados exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los datos.');
    }
};

module.exports = { categoriasMasivoHandler };
