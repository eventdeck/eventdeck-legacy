var server  = require('./../index.js');
var member  = require('./../resources/member');
var company = require('./../resources/company');
var message = require('./../resources/message');

server.route({
  method: 'GET',
  path: '/api/member',
  config: {
    handler: member.list,
    auth: true
  }
});

server.route({
  method: 'POST',
  path: '/api/member',
  config: {
    handler: member.create,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/member/{id}',
  config: {
    handler: member.get,
    auth: true
  }
});

server.route({
  method: 'PUT',
  path: '/api/member/{id}',
  config: {
    handler: member.update,
    auth: true
  }
});

server.route({
  method: 'DELETE',
  path: '/api/member/{id}',
  config: {
    handler: member.delete,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/member/{id}/companies',
  config: {
    handler: company.getByMember,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/member/{id}/messages',
  config: {
    handler: message.getByMember,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/role',
  config: {
    handler: member.roles,
    auth: true
  }
});

server.route({
  method: 'GET',
  path: '/api/role/{id}',
  config: {
    handler: member.getByRole,
    auth: true
  }
});
