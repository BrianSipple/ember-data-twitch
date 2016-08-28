import DS from 'ember-data';
import { A, isEmberArray } from 'ember-array/utils';

const { Transform } = DS;


export default Transform.extend({
  // get it from the server
  deserialize(serialized) {
    return typeof serialized === 'string' ? A(serialized.split(/,\s*/)) : A();
  },

  // send it back to the server
  serialize(deserialized) {
    return isEmberArray(deserialized) ? deserialized.join(', ') : '';
  }
});
