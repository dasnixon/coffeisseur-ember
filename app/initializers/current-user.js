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
          container.lookup('adapter:current-user').lookup().then((data) => {
            store.pushPayload('current-user', data);
            this.set('currentUser', store.all('current-user').get('firstObject'));
          });
        }
      })
    });
  }
};
