let csvToJson = require('convert-csv-to-json');

let fileInputName = './Listings.csv'; 
let fileOutputName = 'Listings.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);