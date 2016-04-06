import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        name: this.get('name'),
        size: this.get('size'),
        color: this.get('color'),
        category: this.get('category'),
        cost: this.get('cost'),
        image: this.get('image'),
      };
      this.set("name", undefined);
      this.set("size", undefined);
      this.set("color", undefined);
      this.set("category", undefined);
      this.set("cost", undefined);
      this.set("image", undefined);
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
