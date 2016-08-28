import { moduleForModel, test } from 'ember-qunit';
import registerAddonItems from '../../helpers/register-addon-items';

moduleForModel('twitch-video', 'Unit | Model | twitch video', {
  // Specify the other units that are required for this test.
  needs: [
    'model:twitch-channel'
  ],
  beforeEach() {
    registerAddonItems(this);
  }
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
