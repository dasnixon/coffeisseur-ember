import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('roast', params.roast_id);
  },

  afterModel: function(controller, model) {
    this._super();
    this.controllerFor('application').setTitle(model.get('name'));
  }
});
