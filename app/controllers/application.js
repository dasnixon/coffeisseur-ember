import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'Home',
  subtitle: null,

  setTitle: function(title) {
    this.set('title', title);
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
