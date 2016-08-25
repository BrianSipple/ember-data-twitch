import { moduleFor, test } from 'ember-qunit';

const MODEL_NAME = 'twitch-follow';


let expected, actual, adapter;

moduleFor('adapter:twitch-follow', 'Unit | Adapter | twitch follow', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('`pathForType` computes the correct Twitch API URL for the `MODEL_NAME`', function(assert) {
  adapter = this.subject();
  expected = 'follows';
  actual = adapter.pathForType(MODEL_NAME);

  assert.equal(actual, expected, `path for "${MODEL_NAME} resolves to ${expected}`);
});


test('`urlForQuery` supports the "channel-users" method for finding the users following a channel', function(assert) {
  adapter = this.subject();

  const pathForType = adapter.pathForType(MODEL_NAME);
  const host = adapter.host;
  const namespace = adapter.namespace;
  const queryStub = { method: 'channel-users', channelName: 'twitch-weekly' };

  expected = `${host}/${namespace}/channels/${queryStub.channelName}/${pathForType}`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected);
});

test('`urlForQuery` supports the "user-channels" method for finding the channels followed by a user', function(assert) {
  adapter = this.subject();

  const pathForType = adapter.pathForType(MODEL_NAME);
  const host = adapter.host;
  const namespace = adapter.namespace;
  const queryStub = { method: 'user-channels', userId: '42' };

  expected = `${host}/${namespace}/users/${queryStub.userId}/${pathForType}/channels`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected);

  queryStub.userId = null;
  assert.throws(
    () => adapter.urlForQuery(queryStub, MODEL_NAME),
    'throws when "user-channels" method is specified without a userId param'
  );
});

test(`\`urlForQuery\` supports the "channel" method with a "channelName"
param for finding the status of a follow relationship between the user and a channel`, function(assert) {


});


test('`urlForQuery` supports the "streams" method for finding the streams that a user is following', function(assert) {

});
