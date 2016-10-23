import Service from 'ember-service';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import injectService from 'ember-service/inject';


export default Service.extend({
  MediaService: injectService('media'),
  isVisible: false,
  isAnimatable: false,
  activeTopLevelRoute: null,

  menuLinks: [
    { routeName: 'videos', title: 'Videos' },
    { routeName: 'blocks', title: 'Blocks' },
    { routeName: 'channels', title: 'Channels' },
    { routeName: 'chats', title: 'Chats' },
    { routeName: 'follows', title: 'Follows' },
    { routeName: 'games', title: 'Games' },
    { routeName: 'ingests', title: 'Ingests' },
    { routeName: 'searches', title: 'Searches' },
    { routeName: 'streams', title: 'Streams' },
    { routeName: 'subscriptions', title: 'Subscriptions' },
    { routeName: 'teams', title: 'Teams' },
    { routeName: 'users', title: 'Users' }
  ],

  init() {
    this._super(...arguments);

    this._initSidenavVisibility();
  },

  _initSidenavVisibility() {
    let MediaService = get(this, 'MediaService');

    set(this, 'isVisible', MediaService.isGreaterThanTablet);
  }
});
