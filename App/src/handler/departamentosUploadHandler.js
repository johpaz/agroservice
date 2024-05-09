const Departamento = require('../models/departamentoModel');

const uploadController = require('../controllers/ubicaciones/uploadDepartamentoController')


const departamentosHandler = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).send('No se proporcionó un archivo válido.');
        }
        const jsonData = await uploadController.convertBufferToJson(req.file.buffer);
        
        await Departamento.deleteMany({}); // Esto eliminará todos los registros, asegúrate de ajustar según tus necesidades
        
         await Promise.all(
            jsonData.map(async (sheet) => {
              const departamento = sheet.data.map(async (row) => {
                
                const nuevaDepartamento = new Departamento(row);
                return await nuevaDepartamento.save();
              });
              return await Promise.all(departamento);
            })
          );

        res.status(200).send('Datos cargados exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los datos.');
    }
};

module.exports = { departamentosHandler };
