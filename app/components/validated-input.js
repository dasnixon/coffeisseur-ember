import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-section-field-input'],
  hideErrors: true,
  value: null,
  errors: null,
  type: null,
  placeholder: null,
  prettifyErrors: Ember.inject.service('prettify-errors'),

  hasErrors: Ember.computed.notEmpty('errors'),

  showErrors: Ember.computed('hideErrors', 'hasErrors', function() {
    return !this.get('hideErrors') && this.get('hasErrors');
  }),

  prettifiedErrors: Ember.computed('showErrors', function() {
    return this.get('prettifyErrors').toS(this.get('errors'));
  }),

  focusIn() {
    this.set('hideErrors', true);
  },

  focusOut() {
    this.set('hideErrors', false);
  }
});
