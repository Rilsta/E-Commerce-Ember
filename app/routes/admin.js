import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin');
    },
  }
});
