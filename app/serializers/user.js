import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
    payload = { users: payload };
    //now our server thinks it's getting a response in the format --> {users: [ bunchOfData ]}
    console.log(payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
