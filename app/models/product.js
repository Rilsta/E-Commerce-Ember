import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  size: DS.attr(),
  color: DS.attr(),
  category: DS.attr(),
  cost: DS.attr(),
  image: DS.attr()
});
