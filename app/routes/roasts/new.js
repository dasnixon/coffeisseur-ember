import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel(transition) {
    this._super(transition);
    if (Ember.isNone(this.modelFor('bean'))) {
      this.transitionTo('beans.new');
    } else {
      this.controllerFor('application').setTitle('Add a roast');
    }
  },

  model() {
    return this.store.createRecord('roast', { bean: this.modelFor('bean') });
  }
});
