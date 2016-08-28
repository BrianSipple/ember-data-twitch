import { moduleForModel, test } from 'ember-qunit';
import registerAddonItems from '../../helpers/register-addon-items';


moduleForModel('twitch-video', 'Unit | Serializer | twitch video', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:twitch-video',
    'model:twitch-channel'
  ],
  beforeEach() {
    registerAddonItems(this);
  }
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
