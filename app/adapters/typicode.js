import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({
  // host: 'https://jsonplaceholder.typicode.com'
  // host: 'https://localhost:4200'
  // host: 'https://localhost:4200'

  host: 'http://localhost:5000/api/v1'




});
