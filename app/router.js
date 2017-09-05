import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
//Hey, I'm a comment
Router.map(function() {
  this.route('foods', {path: '/foods'});
  this.route('about');
  this.route('contact');
  this.route('favorite-word', {path: 'favorite-word/:word'});
  this.route('food', {path: 'foods/:food_id'});
});

export default Router;
