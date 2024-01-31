const ExcelJS = require('exceljs');
const bcrypt = require('bcrypt');

const convertBufferToJsonClient = async (buffer) => {
  const workbook = new ExcelJS.Workbook();
  return workbook.xlsx.load(buffer).then(async (workbook) => {
    const jsonDataClient = [];
    await workbook.eachSheet(async (worksheet) => {
      const sheetData = [];
      let headerRow = null;

      await worksheet.eachRow(async (row, rowNumber) => {
        // La primera fila se considera como la fila de encabezado
        if (rowNumber === 1) {
          headerRow = row.values;
        } else {
          const rowData = {};
          await row.eachCell({ includeEmpty: true }, async (cell, colNumber) => {
            // Solo almacenar las columnas que quieres guardar
            if (headerRow[colNumber]) {
              // Si la columna es "password", encripta la contraseña
              if (headerRow[colNumber] === 'password') {
                const hashedPassword = await bcrypt.hash(cell.value, 10);
                rowData[headerRow[colNumber]] = hashedPassword;
              } else {
                rowData[headerRow[colNumber]] = cell.value;
              }
            }
          });
          sheetData.push(rowData);
        }
      });
      console.log(sheetData);
      jsonDataClient.push({ sheetName: worksheet.name, data: sheetData });
    });

    return jsonDataClient;
  });
};

module.exports = {
  convertBufferToJsonClient,
};
