import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.controllerFor('application').setTitle('Add a bean');
  },

  model: function() {
    return this.store.createRecord('bean');
  }
});
