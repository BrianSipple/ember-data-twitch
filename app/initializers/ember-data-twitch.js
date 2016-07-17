import ENV from '../config/environment';
import TwitchAdapter from '../adapters/twitch';
import TwitchSerializer from '../serializers/twitch';
import TwitchSessionService from '../services/twitch-session';
import Ember from 'ember';


export function initialize(/* application */) {

  // Support initializer signature from before 2.1.0
  // See http://emberjs.com/deprecations/v2.x/#toc_initializer-arity
  const application = arguments[0] || arguments[1];

  const { twitch: twitchConfig = {} } = ENV;


  // TODO: When do we initialize the adapter, and when do we initialize the service?
  // In one of those steps is where authentication needes to happen

  application.register('adapter:-twitch', TwitchAdapter);
  application.register('serializer:-twitch', TwitchSerializer);

  debugger;

  application.register('config:-twitch', twitchConfig, { instantiate: false });
  application.inject('service:twitch-session', 'twitchConfig', 'config:-twitch');
}

export default {
  before: 'ember-data',
  name: 'ember-data-twitch',
  initialize
};
