import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin');
    },
    update(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      this.transitionTo('admin');
    },
    save(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    }
  }
});
