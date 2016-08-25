import TwitchAdapter from 'ember-data-twitch/adapters/twitch';
import { assert } from 'ember-metal/utils';


export default TwitchAdapter.extend({

  urlForQuery({ channelName, userId, method }/* ,modelName */) {
    debugger;
    const baseURL = `${this.host}/${this.namespace}`;

    // Find user follows related to channels
    if (method === 'channel-users') {
      assert('A `channelName` query param is required to query for a channel\'s following users', !!channelName);

      return `${baseURL}/channels/${channelName}/follows`;
    }

    if (method === 'user-channels') {
      assert('A `userId` query param is required to query for a user\'s followed channels', !!userId);

      return `${baseURL}/users/${userId}/follows/channels`;
    }

    if (method === 'user-channel') {
      assert('A `userId` query param is required to query for the status of a user\'s followed channel', !!userId);
      assert('A `channelName` query param is required to query for the status of a user\'s followed channel', !!channelName);

      return `${baseURL}/users/${userId}/follows/channels/${channelName}`;
    }

    if (method === 'streams') {
      return `${baseURL}/streams/followed`;
    }

    return baseURL;
  }
});
