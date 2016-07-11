import Ember from 'ember';
import SetupTwitchSessionInitializer from 'dummy/initializers/setup-twitch-session';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | setup twitch session', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SetupTwitchSessionInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
