/*global app, alert*/
var PageView = require('client/js/pages/base');
var templates = require('client/js/templates');
var SessionForm = require('client/js/forms/session');
var _ = require('client/js/helpers/underscore');
var moment = require('moment');


module.exports = PageView.extend({
  pageTitle: 'Edit session',
  template: templates.pages.sessions.edit,
  initialize: function (spec) {
    var self = this;
    app.sessions.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) {
        return alert('couldnt find a model with id: ' + spec.id);
      }
      self.model = model;
    });
  },
  subviews: {
    form: {
      container: '[data-hook=session-form]',
      waitFor: 'model',
      bindings:{
        'model.img': {
          type: 'attribute',
          hook: 'session-img',
          name: 'background'
        }
      },
      prepareView: function (el) {
        var self = this;
        var model = this.model;
        return new SessionForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            data = _.compactObject(data);

            var changedAttributes = self.model.changedAttributes(data) || {};

            if(data['session-date']) {
              changedAttributes.date = moment(data['session-date'], 'DD-MM-YYYY').toDate();
              delete data['session-date'];
            }

            if(data['session-duration']) {
              changedAttributes.duration = moment(data['session-duration'], 'DD-MM-YYYY').toDate();
              delete data['session-duration'];
            }

            if(data['session-speakers']) {
              changedAttributes.speakers = data['session-speakers'] && data['session-speakers'].map(function(s) {return {id: s};});
              delete data['session-speakers'];
            }

            if(!changedAttributes) {
              return app.navigate('/sessions/'+model.id);
            }

            self.model.save(changedAttributes, {
              patch: true,
              wait: false,
              success: function (model, response, options) {
                app.navigate('/sessions/'+model.id);
              },
              error: function (model, response, options) {
                console.log('error', response.statusCode, response.response);
              }
            });
          }
        });
      }
    }
  }
});