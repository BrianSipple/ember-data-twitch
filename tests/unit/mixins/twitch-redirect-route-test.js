import Ember from 'ember';
import TwitchRedirectRouteMixin from 'ember-data-twitch/mixins/twitch-redirect-route';
import { module, test } from 'qunit';

module('Unit | Mixin | twitch redirect route');

// Replace this with your real tests.
test('it works', function(assert) {
  let TwitchRedirectRouteObject = Ember.Object.extend(TwitchRedirectRouteMixin);
  let subject = TwitchRedirectRouteObject.create();
  assert.ok(subject);
});
