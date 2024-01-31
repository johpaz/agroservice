const uploadClient = require('../controllers/crearClienteMasivo/crearClienteMasivo');
const multer = require('multer');
const Cliente = require('../models/clienteModel')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const handleUploadClient = upload.single('clienteFile');

const uploadHandlerClient = async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error("Archivo no recibido o inválido");
    }

    const jsonDataClient = await uploadClient.convertBufferToJsonClient(req.file.buffer);
    
    const existingClients = [];
    console.log(existingClients);
    // Guardar en la base de datos con verificación de duplicados
    await Promise.all(
      jsonDataClient.map(async (sheet) => {
        const cliente = sheet.data.map(async (row) => {
          try {
            // Verificar si ya existe un cliente con el mismo documentoIdentificacion
            const existingClient =  await Cliente.findOne({ documentoIdentificacion: row.documentoIdentificacion });

            if (existingClient) {
              // Si ya existe, puedes decidir no crear el nuevo cliente o manejarlo de otra manera
              console.log(`Cliente con documentoIdentificacion ${row.documentoIdentificacion} ya existe.`);
              existingClients.push({ documentoIdentificacion: row.documentoIdentificacion });
              return existingClients; // O puedes lanzar una excepción o manejarlo de otra manera
            }

            // Si no existe, crear y guardar el nuevo cliente
            const nuevoClient = await new  Cliente(row);
            return await nuevoClient.save();
          } catch (error) {
            console.error('Error al procesar un cliente:', error.message);
            throw error; // Puedes decidir si quieres lanzar el error o manejarlo de otra manera
          }
        });

        return await Promise.all(cliente);
      })
    );

    if (existingClients.length > 0) {
      res.status(200).json({ success: false, message: "Clientes existentes encontrados", existingClients });
    } else {
      res.status(200).json({ success: true, data: jsonDataClient });
    }
  } catch (error) {
    console.error('Error en el manejador de la subida:', error.message);
    res.status(500).json({ success: false, error: error.message }); // Devuelve el mensaje de error específico
  }
};

module.exports = {
  handleUploadClient,
  uploadHandlerClient
};
