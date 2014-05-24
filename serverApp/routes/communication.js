var server = require('./../index.js');
var communication = require('./../resources/communication');

server.route({
  method: 'GET',
  path: '/api/communication',
  config: {
    handler: communication.list,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/communication/{id}',
  config: {
    handler: communication.get,
    auth: true
  }
});

server.route({
  method: 'POST',
  path: '/api/communication',
  config: {
    handler: communication.create,
    auth: true
  }
});

server.route({
  method: 'PUT',
  path: '/api/communication/{id}',
  config: {
    handler: communication.update,
    auth: true
  }
});

server.route({
  method: 'DELETE',
  path: '/api/communication/{id}',
  config: {
    handler: communication.delete,
    auth: true
  }
});

server.route({
  method: 'POST',
  path: '/api/communication/{id}',
  config: {
    handler: communication.approve,
    auth: true
  }
});
