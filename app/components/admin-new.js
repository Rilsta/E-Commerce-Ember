import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        size: this.get('size'),
        color: this.get('color'),
        category: this.get('category'),
        cost: this.get('cost'),
        image: this.get('image'),
      };
      this.set("name", "");
      this.set("size", "");
      this.set("color", "");
      this.set("category", "");
      this.set("cost", "");
      this.set("image", "");
      this.sendAction('save', params);
    }
  }
});
