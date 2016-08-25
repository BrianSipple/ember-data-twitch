import { moduleForModel, test } from 'ember-qunit';

moduleForModel('twitch-follow', 'Unit | Model | twitch follow', {
  // Specify the other units that are required for this test.
  needs: [
    'model:twitch-user',
    'model:twitch-channel',
    'model:twitch-stream'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
