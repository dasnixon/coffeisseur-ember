import Ember from 'ember';
import Notification from 'coffeisseur-ember/models/notification';

var {
  computed,
  get,
  run
} = Ember;

export default Ember.Service.extend({
  queue: Ember.A([]),
  isEmpty: computed.equal('queue.length', 0),
  defaultTimeout: 2000,

  success(message, timeout=get(this, 'defaultTimeout')) {
    this._add(message, 'success', timeout);
  },

  info(message, timeout=get(this, 'defaultTimeout')) {
    this._add(message, 'info', timeout);
  },

  warning(message, timeout=get(this, 'defaultTimeout')) {
    this._add(message, 'warning', timeout);
  },

  danger(message, timeout=get(this, 'defaultTimeout')) {
    this._add(message, 'danger', timeout);
  },

  addMessage(message, type='info', timeout=get(this, 'defaultTimeout')) {
    this._add(message, type, timeout);
  },

  clearMessages() {
    let notifications = get(this, 'queue');

    run.next(this, () => {
      notifications.clear();
    });
  },

  // private
  _add(message, type, timeout) {
    let notifications = get(this, 'queue');
    let flash   = this._newNotification(this, message, type, timeout);

    run.next(this, () => {
      notifications.pushObject(flash);
    });
  },

  _newNotification(service, message, type, timeout) {
    Ember.assert('Must pass a valid flash service', service);
    Ember.assert('Must pass a valid flash message', message);

    type    = (typeof type === 'undefined') ? 'info' : type;
    timeout = timeout || get(this, 'defaultTimeout');

    return Notification.create({
      type         : type,
      message      : message,
      timeout      : timeout,
      flashService : service
    });
  }
});
