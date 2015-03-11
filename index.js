
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({port: 3000});


// serve up static files
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public',
      listing: true,
      index: true,
      lookupCompressed: true
    }
  }
});


server.start(function () {
  server.log('info', 'Server running at 3000.');
});


// expose for tests
module.exports = server;