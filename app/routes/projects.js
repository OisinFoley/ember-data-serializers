import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
  model(){

    //perhaps later we do let data = this.store.findAll('project');
    //return data.split(',');
    //could be that simple...

    //return this.store.findAll('project');
/*
    let idArray = [];
    // let bigString = "aaa,bbb,ccc,ddd,eee,fff";
    let bigString = this.store.findAll('project');

    bigString = bigString.split(',');

    bigString.forEach((item, index) => {
      idArray.push({ id:item });
    });

    return idArray;
*/

  return this.store.findAll('project');

  },

  setupController(controller, model){

    set(controller, 'projects', model);

  },
  actions:{
    deleteProject(project){
      //console.log("hello");
      alert("testing :: " + project.id);

      project.destroyRecord();
    }
  }



});
