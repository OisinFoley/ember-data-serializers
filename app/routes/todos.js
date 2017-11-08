import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({

  model(){
    return this.store.findAll('todo');
  },

  setupController(controller, model){

    set(controller,'todo', model);
  }
});
