import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
//Hey, I'm a comment
Router.map(function() {
  this.route('foods', {path: '/foods'});
  this.route('about', {path: '/about'});
});

export default Router;
