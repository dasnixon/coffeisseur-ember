import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  name: DS.attr('string'),
  description: DS.attr('string'),
  brewProcess: DS.attr('string'),
  rating: DS.attr('integer', { defaultValue: 0 }),

  user: DS.belongsTo('user'),
  roast: DS.belongsTo('roast'),
  coffeeShop: DS.belongsTo('coffeeShop'),

  validations: {
    name: {
      presence: true
    },

    roast: {
      presence: true
    },

    user: {
      presence: true
    }
  }
});
