import TwitchAdapter from 'ember-data-twitch/adapters/twitch';
import { assert } from 'ember-metal/utils';


export default TwitchAdapter.extend({

  urlForQuery(query/* ,modelName */) {
    debugger;
    const baseURL = `${this.host}/${this.namespace}`;

    // Find user follows related to channels
    if (query.method === 'channel-users') {
      const channelName = query.channelName;

      assert('A `channelName` query param is required to query for a channel\'s following users', !!channelName);

      return `${baseURL}/channels/${channelName}/follows`;
    }

    if (query.method === 'user-channels') {
      const userId = query.userId;

      assert('A `userId` query param is required to query for a user\'s followed channels', !!userId);

      const baseChannelsFollowURL = `${baseURL}/users/${userId}/follows/channels`;

      return query.channelName ? `${baseChannelsFollowURL}/${query.channelName}` : baseChannelsFollowURL;
    }

    // Find user follows related to streams
    if (query.method === 'streams') {
      return `${baseURL}/streams/followed`;
    }

    return baseURL;
  }
});
