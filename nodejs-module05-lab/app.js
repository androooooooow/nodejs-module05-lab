const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.url}`);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello World from Node.js!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
