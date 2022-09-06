const http = require('http');
const requestListener = (req, res) => {
    res.writeHead(201);
    res.write('2/14.szft Szoftverfejlesztok')
    res.end('Hello World!');
}
const server = http.createServer(requestListener);
server.listen(8080);