var Topic = require('../../db/models/topic');
var notification = require('../notification');
var getTargets = require('../member').getTargetsByThread;

module.exports = update;

function update(request, reply) {

  Topic.update({_id: request.payload._id}, request.payload, function (err) {
    if (err) {
      return reply({error: 'There was an error updating the topic with id \'' + request.payload._id + '\'.'});
    }

    getTargets('topic-' + request.payload._id, function (err, targets) {
      if (err) {
        console.log(err);
      }

      if (!request.payload._voting) {
        notification.notify(request.auth.credentials.id, 'topic-' + request.payload._id, 'updated a topic.', null, targets);
      }

      reply({success: 'Topic updated.'});
    });
  });

}
