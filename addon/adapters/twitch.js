import Ember from 'ember';
import injectService from 'ember-service/inject';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const { get, getOwner, isPresent, isBlank, computed, getWithDefault, $: { ajax }} = Ember;
const AUTH_URL = 'https://api.twitch.tv/kraken/oauth2/authorize';


export default JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: 'kraken',
  dataType: 'jsonp',
  apiKey: null,

  session: injectService('twitch-session'),



  headers: computed('session.accessToken', {
    get() {
      debugger;
      const headers = {
        Accept: 'application/vnd.twitchtv.v3+json'
      };

      const accessToken = this.get('session.accessToken');

      if (!isBlank(accessToken)) {
        headers.Authorization = `OAuth ${accessToken}`;
      }

      return headers;
    }
  }),

  pathForType(modelName) {
    return modelName.replace('twitch-', '');
  },

  ajaxOptions(/* url, requestType, options */) {
    debugger;
    const hash = this._super.call(this, ...arguments);

    hash.data = hash.data || {};
    hash.dataType = this.get('dataType');
    hash.traditional = true;
    return hash;
  },

});
