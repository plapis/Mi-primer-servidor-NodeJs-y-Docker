const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('sus.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Servidor activo: http://localhost:8080/');
});
