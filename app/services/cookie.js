import Ember from 'ember';

export default Ember.Service.extend({
  setCookie: function(key, value, options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      try {
        Ember.$.cookie(key, value, options);
        Ember.run(null, resolve);
      } catch(e) {
        Ember.run(null, reject, e);
      }
    });
  },

  getCookie: function(key) {
    return Ember.$.cookie(key);
  },

  removeCookie: function(key, options) {
    return Ember.$.removeCookie(key, options);
  }
});
