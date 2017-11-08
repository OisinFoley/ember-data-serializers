import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
  model(params){
    //the reason we use userId here is because we've no control over the API itself, only its returned payload
    //thus we must conform to its actual key, not our desired key alias, like we went and specified in our serializer

    //all posts for particular user --> /posts/user/4
    return this.store.query('post', { userId: params.id });
  },

  setupController(controller,model){
    set(controller, 'posts', model);
  }
});
