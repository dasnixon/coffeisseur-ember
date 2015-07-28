import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('cup', {
      user: this.get('session.currentUser')
    });
  }
});
