import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
    console.log(payload);

    //if we use ...arguments, it references the initial value for payload which was fed into the function(and
    // is still in memory even though we just assigned the object with a prop of posts to it just 3 lines above
    //to fix we use the below
    // return this._super(...arguments);


    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
