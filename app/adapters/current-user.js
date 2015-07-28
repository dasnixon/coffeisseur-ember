import Ember from 'ember';
import ApplicationAdapter from 'coffeisseur-ember/adapters/application';

export default ApplicationAdapter.extend({
  lookup() {
    const url = `${this.buildURL('user')}/me`;
    return Ember.$.get(url);
  }
});
