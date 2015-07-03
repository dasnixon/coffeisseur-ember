import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  about: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  validations: {
    firstName: {
      presence: true
    },
    lastName: {
      presence: true
    },
    email: {
      presence: true,
      format: {
        with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        allowBlank: false,
        message: 'must be a valid email address'
      }
    },
    password: {
      confirmation: true,
      presence: {
        message: 'password required'
      }
    }
  }
});
