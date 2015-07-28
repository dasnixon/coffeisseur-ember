import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  site: DS.attr('string'),
  email: DS.attr('string'),

  locations: DS.hasMany('coffeeShopLocation'),
  roasts: DS.hasMany('roast'),
  cups: DS.hasMany('cup')
});
