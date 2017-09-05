import DS from 'ember-data';
//import {DS.belongsTo, DS.hasMany} from 'ember-data/relationships'

export default DS.Model.extend({
  name: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  description: DS.attr('string')
});
