const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileData = fs.readFileSync('sus.txt', 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/plain ; charset=utf-8' });
  res.end(fileData);
});

server.listen(8080, () => {
  console.log('Servidor activo: http://localhost:8080/');
});