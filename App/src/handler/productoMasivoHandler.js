const Productos = require('../models/productosModel');
const Categorias = require('../models/categoriaModel');
const uploadController = require('../controllers/productos/uploadProductosController');

const productosuploadHandler = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).send('No se proporcionó un archivo válido.');
        }

        const jsonData = await uploadController.convertBufferToJson(req.file.buffer);
        await Productos.deleteMany({}); // Eliminar todos los registros de productos, ajustar según sea necesario

        await Promise.all(
            jsonData.map(async (sheet) => {
                await Promise.all(sheet.data.map(async (row) => {
                    // Buscar el departamento en la base de datos por nombre
                    let categoria = await Categorias.findOne({ nombre: row.categoria });

                    // Si el categoria no existe, puedes manejar el caso aquí
                    if (!categoria) {
                        // Por ejemplo, puedes lanzar un error
                        throw new Error(`El categoria '${row.categoria}' no se encuentra en la base de datos.`);
                    }

                    // Crear la Productos asociada al departamento
                    const nuevaProductos = new Productos({
                        nombre: row.nombre,
                        descripcion : row.descripcion,
                        categoria_id: categoria._id
                    });
                    await nuevaProductos.save();
                }));
            })
        );

        res.status(200).send('Datos de productos cargados exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los datos de productos.');
    }
};

module.exports = { productosuploadHandler };
