export function initialize (container, app) {
  app.inject('route', 'notifier', 'service:notifier');
  app.inject('controller', 'notifier', 'service:notifier');
}

export default {
  name: 'notifier',
  initialize: initialize
};
