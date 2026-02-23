//console.log("Hello from Nod.js - SE3040 Lab 03");


/* const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
}); */


/* const fs = require('fs');

fs.writeFile('file.txt', 'Hello World! This file was written using Node.js.', function (err) {
  if (err) throw err;
  console.log('File saved!');
}); */


/* const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World from Node.js Web Server!</h1>');
  res.end();
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
}); */


/* const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
}); */


/* const myModule = require('./my-module.js');

console.log(myModule.myFunction()); */


/* const condition = true; // or false to test rejection

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */


const condition = true; // or false to test rejection

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve('Success!');
  else reject('Failure!');
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();