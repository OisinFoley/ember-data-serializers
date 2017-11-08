import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
  model(){
    return this.store.findAll('project');
  },

  setupController(controller, model){

    set(controller, 'projects', model);

  },
  actions:{
    deleteProject(project){
      //console.log("hello");
      //alert("testing :: " + project.id);
      project.destroyRecord();
    }
  }



});
