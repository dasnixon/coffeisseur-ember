import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (Ember.isPresent(this.controllerFor('sessions').get('token'))) {
      this.transitionTo('application');
    }
  },

  setupController: function(controller) {
    controller.reset();
  }
});
