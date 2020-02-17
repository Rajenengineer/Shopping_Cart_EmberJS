import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    publishedSortedProducts: computed('products.[]', function () {
        let products = this.get('products');
        let publishedProducts = products.filter(product => product.isPublished === 'true');
        return publishedProducts.sort((a, b) => {
            return a.price - b.price;
        });
    })
});

