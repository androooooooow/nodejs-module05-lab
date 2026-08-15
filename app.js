const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.url}`);
    setTimeout(() => {

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Response after 2 seconds');
    console.log(`Response sent: ${req.url}`);
}, 2000);
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

