import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  // normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
  //
  //   //payload = { projects: payload };
  //
  //   // let objArray = [];
  //   //
  //   // payload.forEach((item, index) => {
  //   //
  //   //   objArray.push({ id: item});
  //   // });
  //   // payload = { projects: objArray };
  //    if you look at documentation in /dist/assets, we'll see that this function calls one of the
  //   * below functions(either normalizedSingleResponse or normalizedArrayResponse).
  //   * In normalizedArrayResponse, we override its default behaviour when using the forEach loop
  //   * , if we were to perform the forEach loop her ein this function, it'd propagate to the singleResponse function
  //   * and cause an error
  //
  //   //so I had to split out the 2 possible function calls that stem from this generic normalizeResponse() call
  //
  //
  //   //console.log(payload);
  //
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // },


  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){
    //payload.posts.user = payload.posts.userId;
    //delete payload.posts.userId; //as with the above snippet, we can delete this redundant prop from the payload

    return this._super(store, primaryModelClass, payload, id, requestType);

  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let objArray = [];

    payload.forEach((item, index) => {

      objArray.push({ id: item});
    });
    payload = { projects: objArray };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
