import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
  normalize(typeClass, hash) {
    var fields = get(typeClass, 'fields');

    fields.forEach(function(type, field) {
      var payloadField = underscore(field);
      if (field === payloadField) { return; }

      hash[field] = hash[payloadField];
      delete hash[payloadField];
    });

    return this._super.apply(this, arguments);
  }
});
