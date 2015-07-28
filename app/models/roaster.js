import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  founded: DS.attr('date'),
  site: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  phone_country_code: DS.attr('string'),

  roaster: DS.hasMany('roaster')
});
