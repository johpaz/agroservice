const builder = require('xmlbuilder');
const multer = require('multer');
const ExcelJS = require('exceljs');
const fetch = require('node-fetch');

// Configuración del middleware de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single('guieMas');

const workbookFromBuffer = (buffer) => {
  const workbook = new ExcelJS.Workbook();
  return workbook.xlsx.load(buffer);
};

const generateJsonFromSheets = (workbook) => {
  const enviosData = { ADMISIONES: { ADMISION: {} } };

  workbook.eachSheet((worksheet) => {
    const sheetData = [];
    let headerRow = null;

    worksheet.eachRow((row, rowNumber) => {
      // La primera fila se considera como la fila de encabezado
      if (rowNumber === 1) {
        headerRow = row.values;
      } else {
        const rowData = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          // Solo almacenar las columnas que quieres guardar
          if (headerRow[colNumber]) {
            rowData[headerRow[colNumber]] = cell.value;
          }
        });
        sheetData.push(rowData);
      }
    });

    enviosData.ADMISIONES.ADMISION = sheetData;
  });

  return enviosData;
};

const generateXmlFromJson = (enviosData) => {
  const root = builder.create('ADMISIONES');
  const admision = root.ele('ADMISION');

  const agregarElementos = (parent, data) => {
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        // Manejar arrays...
      } else if (typeof value === 'object') {
        // Manejar objetos...
      } else {
        parent.ele(key, value);
      }
    }
  };

  // Agregar elementos directamente bajo la etiqueta "ADMISIONES"
  agregarElementos(admision, enviosData);
  return root.end({ pretty: true });
};

const generarEnvioXMLHandler = async (req, res) => {
  try {
    // Asumiendo que el JSON se encuentra en req.enviosData
    const enviosData = req.enviosData;

    // Construir la estructura del XML
    const xmlString = generateXmlFromJson(enviosData);

    // URL de la dirección web a la que deseas enviar el XML
    const url = process.env.ADMISION_ENVIOS

    // Enviar el XML al servidor
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: xmlString,
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el XML. Código de estado: ${response.status}`);
    }

    const xmlResponse = await response.text();

    // Manejar la respuesta XML como desees

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al procesar el archivo Excel:', error.message);
    res.status(500).json({ error: 'Error interno del servidor al procesar el archivo Excel', details: error.message });
  }
};

const processExcelFile = async (req, res, next) => {
  try {
    // Verificar si el cuerpo de la solicitud contiene el archivo Excel
    if (!req.file || !req.file.buffer) {
      return res.status(400).send('Formato de archivo incorrecto');
    }

    // Verificar si el tipo MIME del archivo es application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return res.status(400).send('El archivo no es un archivo Excel válido');
    }

    // Cargar el archivo Excel usando exceljs
    const workbook = await workbookFromBuffer(req.file.buffer);

    // Generar JSON a partir de las hojas del libro
    const enviosData = generateJsonFromSheets(workbook);

    req.enviosData = enviosData;

    // Llamar al siguiente middleware o función
    next();
  } catch (error) {
    console.error('Error al procesar el archivo Excel:', error.message);
    res.status(500).json({ error: 'Error interno del servidor al procesar el archivo Excel', details: error.message });
  }
};

module.exports = { uploadMiddleware, processExcelFile, generarEnvioXMLHandler };
