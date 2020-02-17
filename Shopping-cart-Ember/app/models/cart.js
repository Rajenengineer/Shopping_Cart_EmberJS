import DS from 'ember-data';

export default DS.Model.extend({
  isPublished: DS.attr('boolean'),
  productName: DS.attr('string'),
  productImage: DS.attr('string'),
  price: DS.attr('number'),
});
