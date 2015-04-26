import DS from 'ember-data';

export default DS.Model.extend({
  degreeOfRoast: DS.attr('string'),
  description: DS.attr('string'),
  roastedWith: DS.attr('string'),
  time: DS.attr('integer'),
  firstCrackAt: DS.attr('integer'),
  secondCrackAt: DS.attr('integer'),
  favorite: DS.attr('boolean')
});
