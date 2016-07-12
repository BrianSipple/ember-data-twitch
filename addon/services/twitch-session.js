import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const {
  Service,
  get,
  set,
  getWithDefault
} = Ember;


export default Service.extend({
  accessToken: null,
  clientId: null,
  clientSecret: null,
  redirectURI: null,

  init() {
    this._super(...arguments);

    const config = getWithDefault(this, 'twitchConfig', {});

    this.set('clientId', get(config, 'clientId'));
    this.set('clientSecret', get(config, 'clientSecret'));
    this.set('redirectURI', get(config, 'redirectURI'));

    // TODO: Authenticate a session with the Twtich API and acquire an access token
  }
});
