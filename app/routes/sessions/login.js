import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      email:       null,
      password:    null,
      token:       null,
      currentUser: null
    });
    Ember.$.ajaxSetup({ headers: { 'Authorization': 'Bearer none' } });
  }
});
