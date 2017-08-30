import Ember from 'ember';

export default Ember.Controller.extend({
  //name: 'Harley Dude',
  appName: 'Menu Tracker',
  foods: [
    {name: 'Tacos', isAvailable: true},
    {name: 'Salad', isAvailable: true},
    {name: 'Pizza', isAvailable: false},
    {name: 'Vegetables', isAvailable: true},
    {name: 'Fruit Smoothie', isAvailable: false}
  ]
});
