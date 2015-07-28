import DS from 'ember-data';

export default DS.Model.extend({
  phoneNumber: DS.attr('string'),
  phoneCountryCode: DS.attr('string'),
  unit: DS.attr('string'),
  building: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  region: DS.attr('string'),
  country: DS.attr('string'),
  addressCode: DS.attr('string'),
  coffeeShop: DS.belongsTo('coffeeShop')
});
