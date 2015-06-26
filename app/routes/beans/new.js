import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function() {
    this.controllerFor('application').setTitle('Add a bean');
  },

  model: function() {
    return this.store.createRecord('bean');
  }
});
