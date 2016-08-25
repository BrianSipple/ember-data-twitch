import Route from 'ember-route';
import injectService from 'ember-service/inject';
import { A, isEmberArray } from 'ember-array/utils';

export default Route.extend({
  TwitchAPIService: injectService('twitch-api'),

  model() {
    return {
      videoIdToSearch: null,
      channelNameToSearch: null,
      // videosPage: this.get('VideosPageService'),
      searchResults: A(),
      isLoadingData: this.get('TwitchAPIService.isLoadingData')
    };
  },

  actions: {
    findById(id) {
      return this
        .get('TwitchAPIService.findByIdTask')
        .perform('video', id)
        .then(results => this._fillSearchResults(results));
        // TODO: Handle flash message here?
        // .catch(({ errors }) => {
        // });
    },

    findByPopularity() {
      return this
        .get('TwitchAPIService.queryTask')
        .perform('video', { method: 'top' })
        .then(results => this._fillSearchResults(results));
    },

    // 📝 TODO: Enable after implementing Channels API
    // findAllForChannel(channelName) {
    //   return this
    //     .get('TwitchAPIService')
    //     .findById('channel', channelName)
    //     .then(channel => {
    //       const videos = channel.get('videos');
    //       this.set('currentModel.channelNameToSearch', '');
    //       this._fillSearchResults(videos);
    //     })
    //     .catch(({ errors }) => {
    //       this.get('currentModel.channelNameToSearch', '');
    //     });
    // },

    // 📝 TODO: Implement after setting up user authorization
    // findFromFollowedChannels() {
    //
    // }
  },



  _fillSearchResults(searchResponse) {
    debugger;
    const currentSearchResults = this.get('currentModel.searchResults');
    const method = isEmberArray(searchResponse) ? 'pushObjects' : 'pushObject';

    this.set('currentModel.videoIdToSearch', '');
    currentSearchResults.clear();
    currentSearchResults[method](searchResponse);
  }

});
