import ENV from '../config/environment';

export function initialize(/* application */) {
  const application = arguments[0] || arguments[1];
  const { 'ember-data-twitch': twitchConfig = {} } = ENV;

  debugger;
  application.register('config:ember-data-twitch', twitchConfig, { instantiate: false });
  application.inject('service:twitch-session', 'twitchConfig', 'config:ember-data-twitch');
}

export default {
  name: 'setup-twitch-session',
  initialize
};
