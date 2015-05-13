import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRoast: function() {
      var self = this;
      this.get('model').save().then(function() {
        this.transitionTo('roast.index', self.get('model'));
      }, function(error) {
        //handle errors
        console.log(error);
      });
    }
  }
});
