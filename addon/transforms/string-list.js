import DS from 'ember-data';
import { A, isEmberArray } from 'ember-array/utils';

const { Transform } = DS;


export default Transform.extend({
  // get it from the server
  deserialize(serialized, { delimiter } = { delimiter: /,\s*/ }) {
    debugger;
    return typeof serialized === 'string' ? A(serialized.split(delimiter)) : A();
  },

  // send it back to the server
  serialize(deserialized, { separator } = { separator: ', ' }) {
    debugger;
    return isEmberArray(deserialized) ? deserialized.join(separator) : '';
  }
});
