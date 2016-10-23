import Route from 'ember-route';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import injectService from 'ember-service/inject';

export default Route.extend({  
  SidenavService: injectService('sidenav'),

  model() {
    return {
      sidenav: get(this, 'SidenavService')
    };
  },

  actions: {
    authenticate() {
      // TODO: Implement -- here, I'm thinking it would just be calling an `authenticate`
      // method from the addon's session service
    },

    willTransition(transition) {
      const activeTopLevelRoute = transition.targetName.split('.')[0];

      set(this, 'SidenavService.activeTopLevelRoute', activeTopLevelRoute);
    },

    toggleSidenav() {
      const SidenavService = get(this, 'SidenavService');

      SidenavService.toggleProperty('isVisible');
      SidenavService.toggleProperty('isAnimatable');
    }
  }
});
