const ExcelJS = require('exceljs');

const convertBufferToJson = async (buffer) => {
  const workbook = new ExcelJS.Workbook();
  return workbook.xlsx.load(buffer).then((workbook) => {
    const jsonData = [];
    
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

      jsonData.push({ sheetName: worksheet.name, data: sheetData });
    });
    
    
    return jsonData;
  });
};


module.exports = {
  convertBufferToJson,

};
