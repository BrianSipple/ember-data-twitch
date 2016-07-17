import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const {
  Service,
  get,
  set,
  getWithDefault,
  isBlank,
  $: { ajax, getJSON }
} = Ember;

const AUTH_URL = 'https://api.twitch.tv/kraken/oauth2/authorize';


export default Service.extend({
  accessToken: null,
  clientId: null,
  clientSecret: null,
  redirectURI: null,
  // responseType: null,

  authenticate(scope) {
    debugger;
    const client_id = this.get('clientId');
    const redirect_uri = this.get('redirectURI');
    // const response_type = this.get('responseType');

    const queryParams = {
      response_type: 'code',
      client_id,
      redirect_uri
    };

    if (typeof scope === 'string' && scope !== '') {
      queryParams.scope = scope;
    }

    return ajax(AUTH_URL, {
      data: queryParams,
      dataType: 'jsonp',
    })
    .then(
      resp => { debugger; },
      e => { debugger; }
    );
  },

  init() {
    this._super(...arguments);

    const config = getWithDefault(this, 'twitchConfig', {});

    this.set('clientId', get(config, 'clientId'));
    this.set('redirectURI', get(config, 'redirectURI'));
  }
});
