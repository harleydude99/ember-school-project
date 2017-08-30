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
  ],
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  actions: {
    buttonClick(){
      alert('button was clicked!');
    },
    wasClicked(elementName){
      alert(`${elementName} was clicked!`);//example of string interpolation w ``
    },
    toggleAvailability(food){
      Ember.set(food, 'isAvailable', !food.isAvailable);
    }
  },
  myFunction: function(){ //equivalent of myFunction(){}

  }
});
