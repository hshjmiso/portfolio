const xlsx = require('xlsx');
const excelFile = xlsx.readFile('./행정_법정동 중심좌표.xlsx');
const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' });

const fs = require('fs');
fs.writeFileSync('dong_coord.json', JSON.stringify(jsonData));

// console.log(jsonData);
