import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (Ember.isNone(this.modelFor('bean'))) {
      this.transitionTo('beans.new');
    }
  },

  model: function() {
    this.store.createRecord('roast', { bean: this.modelFor('bean') });
  }
});
