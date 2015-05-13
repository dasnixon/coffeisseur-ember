import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveBean: function() {
      var self = this;
      this.get('model').save().then(function() {
        this.transitionTo('bean.index', self.get('model'));
      }, function(error) {
        //handle errors
        console.log(error);
      });
    }
  }
});
