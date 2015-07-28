import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('about');
  this.resource('cups', function() {
    this.route('new');
  });
  this.resource('cup', { path: '/cup/:cup_id' }, function() {
    this.route('edit');
  });
  this.resource('users', function() {
    this.route('signup');
  });
  this.route('login');
});
