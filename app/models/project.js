import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // screens: DS.attr('screen'),
  homeScreenId: DS.attr('string'),
  settings: DS.attr(),
  runtimeUrl: DS.attr('string')
});
