import { moduleFor, test } from 'ember-qunit';
import initTwitchConfig from '../../helpers/init-twitch-config';

let actual, expected;

moduleFor('adapter:twitch-video', 'Unit | Adapter | twitch video', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo'],
  beforeEach() {
    initTwitchConfig();
  }
});

test('`pathForType` computes the correct Twitch API URL for the `modelName`', function (assert) {
  let adapter = this.subject();
  let modelName = 'twitch-video';

  expected = 'videos';
  actual = adapter.pathForType(modelName);

  assert.equal(actual, expected, `path for "${modelName} resolves to ${expected}`);
});
