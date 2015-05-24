import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (Ember.isPresent(this.controllerFor('sessions.login').get('token'))) {
      this.transitionTo('application');
    }
  }
});
