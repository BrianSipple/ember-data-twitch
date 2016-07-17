import Ember from 'ember';

const { Mixin, inject: { service } } = Ember;


export default Mixin.create({
  session: service('twitch-session'),

  beforeModel(transtion) {
    debugger;
    const targetDestination = '';
    const accessToken = '';

    this.get('session').set('accessToken', accessToken);
    
    this.replaceWith(targetDestination);
  }
});
