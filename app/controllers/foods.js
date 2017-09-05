import Ember from 'ember';

export default Ember.Controller.extend({
  //name: 'Harley Dude',
  appName: 'Menu Tracker',
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true), //value to filter by is 3rd arg
  actions: {
    buttonClick(){
      alert('button was clicked!');
    },
    wasClicked(elementName){
      alert(`${elementName} was clicked!`);//example of string interpolation w ``
    },
    toggleAvailability(food){
      Ember.set(food, 'isAvailable', !Ember.get(food, 'isAvailable'));
      food.save();
    },
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    destroyItem(food){
      food.destroyRecord()
    }
  },
  myFunction: function(){ //equivalent of myFunction(){}

  }
});
