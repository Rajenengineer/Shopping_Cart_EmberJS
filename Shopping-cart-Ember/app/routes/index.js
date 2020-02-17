import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  api: inject('shopping'),
  model() {
    return this.get('api').getProducts();
  }
});
