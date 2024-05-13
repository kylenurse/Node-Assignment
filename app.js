const http = require('http');
const routes = require('./routes');

const server = http.createServer(reqHandler);
server.listen(3000);
