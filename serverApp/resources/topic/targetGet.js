var Hapi  = require('hapi');
var Topic = require('./../../db/models/topic.js');

exports = module.exports = targetGet;

function targetGet(request, reply) {

  Topic.findByTarget(request.params.id, function (err, result) {
    if (err) {
      reply(err);
    }
    else {
      reply(result);
    }
  });

}
