import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  characteristics: DS.attr('string'),
  degreeOfRoast: DS.attr('string'),
  farm: DS.attr('string'),
  varietal: DS.attr('string'),
  processing: DS.attr('string'),
  grade: DS.attr('string'),
  appearance: DS.attr('string'),
  country: DS.attr('string'),
  region: DS.attr('string'),
  organic: DS.attr('boolean'),
  espresso: DS.attr('boolean'),

  beans: DS.hasMany('bean')
});
