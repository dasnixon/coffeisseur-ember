import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (Ember.isNone(this.modelFor('bean'))) {
      this.transitionTo('beans.new');
    } else {
      this.controllerFor('application').setTitle('Add a roast');
    }
  },

  model: function() {
    return this.store.createRecord('roast', { bean: this.modelFor('bean') });
  }
});
