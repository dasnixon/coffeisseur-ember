import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    this.set('token', this.get('cookie').getCookie('access_token'));
    this.set('currentUser', this.get('cookie').getCookie('auth_user'));
    if (this.get('cookie').getCookie('access_token')) {
      Ember.$.ajaxSetup({
        headers: {
          'Authorization': 'Bearer ' + this.get('cookie').getCookie('access_token')
        }
      });
    }
  },

  attemptedTransition: null,
  token: null,
  currentUser: null,

  tokenChanged: (function() {
    if (Ember.isEmpty(this.get('token'))) {
      this.get('cookie').removeCookie('access_token');
      this.get('cookie').removeCookie('auth_user');
    } else {
      this.get('cookie').setCookie('access_token', this.get('token'));
      this.get('cookie').setCookie('auth_user', this.get('currentUser'));
    }
  }).observes('token'),

  reset: function() {
    this.setProperties({
      email: null,
      password: null,
      token: null,
      currentUser: null
    });
    Ember.$.ajaxSetup({
      headers: {
        'Authorization': 'Bearer none'
      }
    });
  },

  clearForm: function() {
    this.setProperties({
      email: null,
      password: null
    });
  },

  actions: {
    loginUser: function() {
      var attemptedTrans, data, sessionsAdapter;
      data = this.getProperties('email', 'password');
      this.clearForm();
      attemptedTrans = this.get('attemptedTransition');
      sessionsAdapter = this.container.lookup('adapter:sessions');
      return sessionsAdapter.authenticate(data).then((function(_this) {
        return function(response) {
          var key;
          Ember.$.ajaxSetup({
            headers: {
              'Authorization': 'Bearer ' + response.api_key.access_token
            }
          });
          key = _this.get('store').createRecord('apiKey', {
            accessToken: response.api_key.access_token
          });
          _this.store.find('user', response.api_key.user_id).then(function(user) {
            _this.setProperties({
              token: response.api_key.access_token,
              currentUser: user.getProperties('username', 'name', 'email')
            });
            key.set('user', user);
            key.save();
            user.get('apiKeys').content.push(key);
            if (attemptedTrans) {
              attemptedTrans.retry();
              _this.set('attemptedTransition', null);
            } else {
              _this.transitionToRoute('roasts');
            }
          });
        };
      })(this), function(error) {
        if (Ember.isEqual(error.status, 401)) {
          alert("wrong user or password, please try again");
        }
      });
    }
  }
});
