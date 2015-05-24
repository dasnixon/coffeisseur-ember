import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  actions: {
    willTransition: function() {
      if (this.modelFor('users.signup').get('isNew')) {
        this.modelFor('users.signup').unloadRecord();
      }
    }
  }
});
