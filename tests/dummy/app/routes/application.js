import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service('twitch-session'),


  actions: {
    authenticate() {
      return this.get('session').authenticate();
    }
  }
});
