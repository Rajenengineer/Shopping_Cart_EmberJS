import DS from 'ember-data';
// import App from '@ember/application';
// import App from 'ember/Application';

export default DS.Model.extend({
  isPublished: DS.attr('boolean'),
  productName: DS.attr('string'),
  productImage: DS.attr('string'),
  price: DS.attr('number'),
});
