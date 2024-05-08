const Departamento = require('../models/departamentoModel');
const Ciudad = require('../models/ciudadModel');
const excelToJson = require('convert-excel-to-json');

const ubicacionesHandler = async (req, res) => {
    console.log('req', req.file)
    try {
        const excelData = excelToJson({
            source: req.file.buffer, 
            header: {
                rows: 1 // filas que contienen los encabezados
            }
        });

        console.log('excel data', excelData);

       // guarda los departamentos y ciudades
       for (const row of Object.values(excelData)) {
        // busca o crea el departamento por el codigo Dane
        let departamento = await Departamento.findOne({ codigoDane: row.A });
        if (!departamento) {
            departamento = await Departamento.create({ codigoDane: row.A, departamento: row.B });
        }
        // crea la ciudad asociada al departamento
        await Ciudad.create({
            codigoDane: row.C,
            ciudad: row.D,
            departamento: departamento._id 
        });
    }
    
        res.status(200).send('Datos cargados exitosamente.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los datos.');
      }
    }



module.exports = {ubicacionesHandler}
  


