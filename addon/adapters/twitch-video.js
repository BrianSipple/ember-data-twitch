import TwitchAdapter from './twitch';
import injectService from 'ember-service/inject';

export default TwitchAdapter.extend({
  isFindingTopVideos: false,

  findAll(store, type) {
    debugger;
    return this._super(...arguments);
  },


  buildURL(modelName, id, snapshot, requestType, query) {
    debugger;
    const url = this._super(...arguments);

    return this.get('isFindingTopVideos') ? `${url}/top` : url;
  }

});
