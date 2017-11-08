import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
    console.log(payload);

    //in post model, a prop is userId, as in the returned JSON.
    // We'd like that prop formatted in the return JSON payload as '.user'
    //then we delete the redundant property from the returned payload, ie - cut '.userId' prop
    // ---
    //finally we change our model to reflect the new property key

    // return this._super(...arguments);

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  /**** both of the below methods exist in dist/assets/vendors and you''ll see that the above 'normalizeResponse'
   * function will redirect to one of the below functions. the reason we've re-written them is because
   * we're overriding normalizeArrayResponse using the forEach loop to give a new alias to our userId key,
   * as we see below*/

  //running a forEach over a single post record obviously doesn't return an array, thus forEach flags an error
  //we're going to normalize a single response instead.

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){
    payload.posts.user = payload.posts.userId;
    delete payload.posts.userId; //as with the above snippet, we can delete this redundant prop from the payload

    return this._super(store, primaryModelClass, payload, id, requestType);
    //we didn't override anything like we did at top the start of the above function, so we could also use ...arguments on the line above
    //for the sake of consistency, we return the same as we did in the above function
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.posts.forEach((post) => {
      post.user = post.userId;
      delete post.userId;
    });

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});




//if we use '...arguments', it references the initial value for payload which was fed into the function(and
// is still in memory even though we just assigned the object with a prop of posts to it as we entered the function
//to fix we use the return statement at the bottom
