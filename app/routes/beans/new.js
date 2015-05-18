import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('application').setTitle('Add a bean');
  },

  model: function() {
    return this.store.createRecord('bean');
  }
});
