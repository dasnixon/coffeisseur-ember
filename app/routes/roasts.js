import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('application').setTitle('Roasts');
  },

  model: function() {
    return this.store.find('roast');
  }
});
