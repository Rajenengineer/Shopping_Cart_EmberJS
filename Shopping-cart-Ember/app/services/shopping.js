import Service from '@ember/service';
import $ from 'jquery';
// import axios from 'npm:axios';
const BASE_URL = 'http://localhost:3000/api/v1';

export default Service.extend({
  getProducts() {
    const url = `${BASE_URL}/products`;
    return $.get(url).then(response => response.data);
  },
  /*getCart() {
    const url = `${BASE_URL}/api/cart`;
    return axios.get(url).then(response => response.data);
  }*/
});
