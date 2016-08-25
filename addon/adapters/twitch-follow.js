import DS from 'ember-data';

const { JSONAPIAdapter } = DS;


export default JSONAPIAdapter.extend({

  urlForQuery(query, modelName) {
    debugger;
    const baseURL = this._super(...arguments);

    // Find user follows related to channels
    if (query.method === 'channel') {
      const userId = query.userId;
      const baseChannelsFollowURL = `${baseURL}/users/${userId}/follows/channels`;

      return query.channelName ? `${baseChannelsFollowURL}/${query.channelName}` : baseChannelsFollowURL;
    }

    // Find user follows related to streams
    if (query.method === 'streams') {
      return `${baseURL}/streams/followed`;
    })

    return baseURL;
  }
});
