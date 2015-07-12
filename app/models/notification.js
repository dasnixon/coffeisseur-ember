import Ember from 'ember';

var {
  computed,
  get,
  set,
  getWithDefault,
  run,
  on
} = Ember;

export default Ember.Object.extend({
  defaultTimeout: computed.alias('flashService.defaultTimeout'),
  queue: computed.alias('flashService.queue'),

  destroyLater: on('init', function() {
    const defaultTimeout = get(this, 'defaultTimeout');
    const timeout        = getWithDefault(this, 'timeout', defaultTimeout);

    run.later(this, '_destroyMessage', timeout);
  }),

  destroyMessage() {
    this._destroyMessage();
  },

  // private
  _destroyMessage() {
    run.next(this, () => {
      set(this, 'isDestroyed', true);
      get(this, 'queue').removeObject(this);
    });
  }
});
