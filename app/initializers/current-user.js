import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'current-user',
  before: 'simple-auth',
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: Ember.observer('isAuthenticated', function() {
        const accessToken = this.get('secure.token');
        const store = container.lookup('store:main');
        if (Ember.isPresent(accessToken) && this.get('isAuthenticated')) {
          container.lookup('adapter:user').lookupCurrentUser().then((data) => {
            store.pushPayload('user', data);
          });
        }
      })
    });
  }
};
