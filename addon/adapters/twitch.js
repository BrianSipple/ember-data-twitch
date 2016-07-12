import Ember from 'ember';
import injectService from 'ember-service/inject';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const { getOwner, isPresent } = Ember;


export default JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: 'kraken',
  dataType: 'jsonp',
  apiKey: null,

  session: injectService('twitch-session'),

  // headers: compted('session.accessToken', {
  //   get() {
  //     const accessToken = this.get('session.accessToken' || '');
  //
  //     return {
  //       'Accept', 'application/vnd.twitchtv.v3+json',
  //       'Authorization': `OAuth ${accessToken}`
  //     };
  //   }
  // }),

  init() {
    this._super(...arguments);

    debugger;
    this._initApiKey();

  },

  ajaxOptions() {
    let hash = this._super.call(this, ...arguments);
    hash.data = hash.data || {};
    hash.dataType = this.get('dataType');
    hash.traditional = true;
    return hash;
  },

  _initApiKey() {
    const session = this.get('session');
    debugger;
  }
});
