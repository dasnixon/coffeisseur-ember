import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    invalidateSesseion: function() {
      this.get('session').invalidate();
    }
  }
});
