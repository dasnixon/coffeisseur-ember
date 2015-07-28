import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['coffeeRating'],

  rating: 0,
  maxRating: 5,
  setAction: null,

  cups: Ember.computed('rating', 'maxRating', function() {
    const fullcups = this.range(1, this.get('rating'), 'full');
    const emptycups = this.range(this.get('rating') + 1, this.get('maxRating'), 'empty');
    return fullcups.concat(emptycups);
  }),

  range(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: Ember.isEqual(type, 'full') });
    }
    return starsData;
  },

  actions: {
    set(newRating) {
      this.set('rating', newRating);
    }
  }
});
