import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  classNames: ['main'],

  _setup: Ember.on('init', function() {
    Ember.run.scheduleOnce('afterRender', this, this._setOffsetFromNavbar);
  }),

  _setOffsetFromNavbar() {
    let offset = 80; //navbar height
    if (Ember.$('.subNav').length) {
      offset += 40;
    }
    this.$().css('padding-top', `${offset}px`);
  }
});
