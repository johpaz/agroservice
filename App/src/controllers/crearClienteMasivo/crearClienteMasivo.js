const ExcelJS = require('exceljs');
const bcrypt = require('bcrypt');

const convertBufferToJsonClient = async (buffer) => {
  const workbook = new ExcelJS.Workbook();
  return workbook.xlsx.load(buffer).then(async (workbook) => {
    const jsonDataClient = [];
    const processedDocumentIds = new Set(); // Para evitar duplicados

    for (const worksheet of workbook.worksheets) {
      const sheetData = [];
      const headerRow = worksheet.getRow(1).values;

      for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
        const row = worksheet.getRow(rowNumber);
        const rowData = {};

        const documentoIdentificacion = row.getCell(headerRow.indexOf('documentoIdentificacion') + 1)?.text;

        if (documentoIdentificacion && !processedDocumentIds.has(documentoIdentificacion)) {
          processedDocumentIds.add(documentoIdentificacion);

          for (let colNumber = 1; colNumber <= headerRow.length; colNumber++) {
            const header = headerRow[colNumber];
            const cell = row.getCell(colNumber);

            if (cell) {
              if (header === 'password') {
                const hashedPassword = await bcrypt.hash(cell.text || '', 10);
                rowData[header] = hashedPassword;
              } else {
                rowData[header] = cell.text || '';
              }
            } else {
              // Manejar el caso donde la celda está vacía
              rowData[header] = ''; // O asigna otro valor predeterminado si es necesario
            }
          }

          sheetData.push(rowData);
          console.log(sheetData);
        }
      }

      if (sheetData.length > 0) {
        jsonDataClient.push({ sheetName: worksheet.name, data: sheetData });
      }
    }

    console.log(jsonDataClient);

    return jsonDataClient;
  });
};

module.exports = {
  convertBufferToJsonClient,
};
