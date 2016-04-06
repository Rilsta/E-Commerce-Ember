import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product) {
      if (confirm('Delete this Product?')) {
        this.sendAction('destroyProduct', product);
      }
    },
  }
});
