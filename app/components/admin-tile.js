import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(product, params) {
      this.sendAction('update', product, params);
    },
    delete(product) {
      if (confirm('Delete this Product?')) {
        this.sendAction('destroyProduct', product);
      }
    },
  }
});
