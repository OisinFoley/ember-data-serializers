import Ember from 'ember';


const { Route, set } = Ember;

export default Ember.Route.extend({
  model(){
    console.log("hello");
    return this.store.findAll('post');
  },

  setupController(controller, model){
    Ember.set(controller, 'posts', model );
  }
});
