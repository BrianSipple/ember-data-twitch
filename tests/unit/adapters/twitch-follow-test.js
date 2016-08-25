import { moduleFor, test } from 'ember-qunit';

const MODEL_NAME = 'twitch-follow';

let expected;
let actual;
let adapter;
let pathForType;
let host;
let namespace;
let message;

moduleFor('adapter:twitch-follow', 'Unit | Adapter | twitch follow', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  beforeEach() {
    adapter = this.subject();
    host = adapter.host;
    namespace = adapter.namespace;
  }
});

test('`pathForType` computes the correct Twitch API URL for the `MODEL_NAME`', function(assert) {
  expected = 'follows';
  actual = adapter.pathForType(MODEL_NAME);

  assert.equal(actual, expected, `path for "${MODEL_NAME} resolves to ${expected}`);
});

test('`urlForQuery`', function(assert) {
  const userId = 42;
  const channelName = 'twitch-weekly';
  const queryStub = { method: 'channel-users', channelName, userId };

  message = 'supports the "channel-users" query method for finding the users following a channel';
  expected = `${host}/${namespace}/channels/${queryStub.channelName}/follows`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected, message);


  queryStub.method = 'user-channels';

  message = 'supports the "user-channels" query method for finding the channels followed by a user';
  expected = `${host}/${namespace}/users/${userId}/follows/channels`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected, message);
  assert.throws(
    () => adapter.urlForQuery({ method: queryStub.method }, MODEL_NAME),
    'throws when "user-channels" method is specified without a `userId` param'
  );


  queryStub.method = 'user-channel';

  message = 'supports the "user-channel" query method with both a `channelName` and `userID` param ' +
  'for finding the status of a follow relationship between the user and a channel';
  expected = `${host}/${namespace}/users/${userId}/follows/channels/${channelName}`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected, message);
  assert.throws(
    () => adapter.urlForQuery({ method: queryStub.method, channelName: queryStub.channelName }, MODEL_NAME),
    'throws when "user-channel" method is specified without a `userId` param'
  );
  assert.throws(
    () => adapter.urlForQuery({ method: queryStub.method, userId: queryStub.userId }, MODEL_NAME),
    'throws when "user-channel" method is specified without a `userId` param'
  );


  queryStub.method = 'streams';

  message = 'supports the "streams" query method for finding the streams that a user is following';
  expected = `${host}/${namespace}/streams/followed`;
  actual = adapter.urlForQuery(queryStub, MODEL_NAME);

  assert.equal(actual, expected, message);
});
