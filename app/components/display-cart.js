import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  fullCost: Ember.computed('shoppingCart.items', function() {
    var items = this.get('shoppingCart').items;
    var total = 0;
    items.forEach(function(item){
      total += parseInt(item.get('cost'));
    });
    return total;
  }),
  itemCount: Ember.computed('shoppingCart.items', function() {
    var items = this.get('shoppingCart').items;
    return items.length;
  }),
});
