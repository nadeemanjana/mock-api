const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('ADDR_for_website.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);