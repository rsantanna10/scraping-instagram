const http = require('http');
const express = require('express');
const route = require('./config/route.js');


const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

});

server = express(), new route(server);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
