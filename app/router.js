import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('beans', function() {
    this.route('new');
  });
  this.resource('bean', { path: '/bean/:bean_id' }, function() {
    this.route('edit');
  });
  this.resource('roasts', function() {
    this.route('new');
  });
  this.resource('roast', { path: '/roast/:roast_id' }, function() {
    this.route('edit');
  });
});
