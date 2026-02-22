const fs = require('fs');

fs.writeFile('file.txt', 'Hello World! This file was written using Node.js.', function (err) {
  if (err) throw err;
  console.log('File saved!');
});