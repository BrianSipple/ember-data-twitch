import TwitchAdapter from './twitch';
import injectService from 'ember-service/inject';

export default TwitchAdapter.extend({

  /**
   * Support searching for top videos using the "top" query method
   */
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    const url = this._super(...arguments);

    return query.method === 'top' ? `${url}/top` : url;
  }
});
