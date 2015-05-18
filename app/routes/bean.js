import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('bean', params.bean_id);
  },

  afterModel: function(controller, model) {
    this._super();
    this.controllerFor('application').setTitle(model.get('name'));
  }
});
