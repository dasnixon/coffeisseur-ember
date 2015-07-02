import Ember from 'ember';

export default Ember.Service.extend({
  toS(errorsList) {
    if (Ember.isEqual(Ember.typeOf(errorsList), 'array')) {
      return errorsList.join(', ');
    } else {
      return errorsList;
    }
  }
});
