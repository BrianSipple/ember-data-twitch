import { module, test } from 'qunit';
import StringListTransform from 'ember-data-twitch/transforms/string-list';

const COLOR_RED = 'red';
const COLOR_GREEN = 'green';
const COLOR_BLUE = 'blue';

const SERIALIZED = `${COLOR_RED}, ${COLOR_GREEN}, ${COLOR_BLUE}`;
const DESERIALIZED = [COLOR_RED, COLOR_GREEN, COLOR_BLUE];

let actual, expected;
let transform;

module('Unit | Transform | string list', {
  beforeEach() {
    transform = StringListTransform.create();
  }
});

test('deserializing a string of comma-separated items into an array', function (assert) {
  expected = DESERIALIZED;
  actual = transform.deserialize(SERIALIZED);

  assert.deepEqual(actual, expected);
});

test('serializing an array of strings into a comma-separated string', function (assert) {
  expected = SERIALIZED;
  actual = transform.serialize(DESERIALIZED);

  assert.equal(actual, expected);
});
