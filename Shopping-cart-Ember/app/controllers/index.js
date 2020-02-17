import Controller from '@ember/controller';
import products from '../data/products'

export default Controller.extend({
  showModal: false,
  init() {
    this._super();
    this.set('availableProducts', products);
    this.set('addedProducts', []);
    this.cloneProducts = JSON.parse(JSON.stringify(this.get('availableProducts')));
  },

  actions: {
    addOrRemove: function (product, type) {
      let filteredList;
      if (type === 'add') {
        filteredList = this.get('availableProducts').filter(val => val.productName !== product.productName);
        this.get('addedProducts').pushObject(product);
        this.set('availableProducts', filteredList);
      } else {
        filteredList = this.get('addedProducts').filter(val => val.productName !== product.productName);
        this.get('availableProducts').pushObject(product);
        this.set('addedProducts', filteredList);
      }
    },
    toggleModal(val) {
      this.set('showModal', val);
    },
    keyUp: function () {
      const input = arguments[0];

      if (input.length > 0) {
        const filterProducts = this.cloneProducts.filter(product => product.productName.toUpperCase().includes(input.toUpperCase()));
        this.set('availableProducts', filterProducts);
      } else {
        this.set('availableProducts', this.cloneProducts);
      }
    }
  }
});
