import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sessions/login'],

  actions: {
    createUser: function() {
      var _this = this;
      this.get('model').save().then(function() {
        var sessionsController = _this.get('controllers.sessions/login');
        sessionsController.setProperties({
          email: _this.get('model.email'),
          password: _this.get('model.password')
        });
        _this.get('model').deleteRecord();
        sessionsController.send('loginUser');
      }, function(error) {
        if (Ember.isEqual(error.status, 422)) {
          _this.set('errors', JSON.parse(error.responseText).errors);
        }
      });
    }
  }
});
