import DS from 'ember-data';
import { A, isEmberArray } from 'ember-array/utils';

const { Transform } = DS;


export default Transform.extend({
  // get it from the server
  deserialize(serialized) {
    return isEmberArray(serialized) ? A(serialized) : A();
  },

  // send it back to the server
  serialize(deserialized) {
    return isEmberArray(deserialized) ? A(deserialized) : A();
  }
});
