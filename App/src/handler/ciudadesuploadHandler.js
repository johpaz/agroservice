const Ciudad = require('../models/ciudadModel');
const Departamento = require('../models/departamentoModel');
const uploadController = require('../controllers/ubicaciones/uploadCiudadesController');

const ciudadesuploadHandler = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).send('No se proporcionó un archivo válido.');
        }

        const jsonData = await uploadController.convertBufferToJson(req.file.buffer);
        await Ciudad.deleteMany({}); // Eliminar todos los registros de ciudades, ajustar según sea necesario

        await Promise.all(
            jsonData.map(async (sheet) => {
                await Promise.all(sheet.data.map(async (row) => {
                    // Buscar el departamento en la base de datos por nombre
                    let departamento = await Departamento.findOne({ departamento: row.departamento });

                    // Si el departamento no existe, puedes manejar el caso aquí
                    if (!departamento) {
                        // Por ejemplo, puedes lanzar un error
                        throw new Error(`El departamento '${row.departamento}' no se encuentra en la base de datos.`);
                    }

                    // Crear la ciudad asociada al departamento
                    const nuevaCiudad = new Ciudad({
                        codigoDane: row.codigoDane,
                        ciudad: row.Ciudad,
                        departamento_id: departamento._id
                    });
                    await nuevaCiudad.save();
                }));
            })
        );

        res.status(200).send('Datos de ciudades cargados exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los datos de ciudades.');
    }
};

module.exports = { ciudadesuploadHandler };
