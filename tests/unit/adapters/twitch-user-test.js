import { moduleFor, test } from 'ember-qunit';


let actual, expected;

moduleFor('adapter:twitch-user', 'Unit | Adapter | twitch user', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('`pathForType` computes the correct Twitch API URL for the `modelName`', function (assert) {
  const adapter = this.subject();
  const modelName = 'twitch-user';

  expected = 'users';
  actual = adapter.pathForType(modelName);

  assert.equal(actual, expected, `path for "${modelName} resolves to ${expected}`);
});