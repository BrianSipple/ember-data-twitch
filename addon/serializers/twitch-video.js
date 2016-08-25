import TwitchSerializer from './twitch';

export default TwitchSerializer.extend({

  __extractRelationships(_modelClass, resourceHash) {
    const keyForLink = this.keyForLink();

    return {
      channel: {
        links: {
          self: resourceHash[keyForLink].channel
        },
        data: {
          type: 'twitch-channel',
          id: resourceHash.channel.name
        }
      }
    };
  }
});
