import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('application').setTitle('Register');
  },

  model() {
    return this.store.createRecord('user');
  },

  _cleanupUnpersistedUser: Ember.on('deactivate', function() {
    if (this.modelFor('users.signup').get('isNew')) {
      this.modelFor('users.signup').unloadRecord();
    }
  })
});
