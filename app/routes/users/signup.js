import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('current-user');
  },

  _cleanupUnpersistedUser: Ember.on('deactivate', function() {
    const user = this.modelFor('users.signup');
    if (Ember.isPresent(user) && user.get('isNew')) {
      user.rollback();
      user.unloadRecord();
    }
  })
});
