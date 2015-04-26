import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.host
});
