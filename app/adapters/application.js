import DS from 'ember-data';
import ENV from 'coffeisseur-ember/config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.host
});
