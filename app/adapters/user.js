import Ember from 'ember';
import ApplicationAdapter from 'wabi-sabi-ember/adapters/application';

export default ApplicationAdapter.extend({
  lookupCurrentUser() {
    const url = `${this.buildURL('user')}/me`;
    return Ember.$.get(url);
  }
});
