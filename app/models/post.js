import DS from 'ember-data';
//import Model from 'ember/data/model';

const {
  attr, Model, belongsTo
} = DS;

//export default DS.Model.extend({
export default Model.extend({
  // userId: belongsTo('user'),
  //see serializers/posts to see why we've changed property key

  user: belongsTo('user'),

  title: attr('string'),
  body:  attr('string')

});
