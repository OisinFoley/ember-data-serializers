import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

//http://localhost:4200/dummy-data/posts.json

Router.map(function() {
  this.route('posts',  { path:'/posts' } ,function() {
    this.route('user', { path: '/user/:id'});
    this.route('show', { path: '/:id'});
  });
  this.route('todos');
  this.route('projects');
});

export default Router;
