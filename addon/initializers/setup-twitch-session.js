import ENV from '../config/environment';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  const application = arguments[0] || arguments[1];
  const { 'ember-data-twitch': twitchConfig } = ENV;

  // TODO: Authenticate a session with the Twtich API and inject our
  // unique token into the twitch-session service
  const accessToken = '';
  application.inject('service:twitch-session', 'accessToken', accessToken);
}

export default {
  name: 'setup-twitch-session',
  initialize
};
