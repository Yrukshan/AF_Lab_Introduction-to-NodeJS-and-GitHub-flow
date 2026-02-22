//console.log("Hello from Nod.js - SE3040 Lab 03");

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});