import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price_per_lb: DS.attr('integer'),
  origin: DS.attr('string'),
  process: DS.attr('string'),

  roaster: DS.belongsTo('roaster')
});
