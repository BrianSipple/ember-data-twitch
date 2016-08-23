import Service from 'ember-service';
import injectService from 'ember-service/inject';
import { task, timeout, taskGroup } from 'ember-concurrency';
import { bool } from 'ember-computed';
import getOwner from 'ember-owner/get';


// 📝 TODO: Experiment with this idea and see if it might be usefull
// for our dummy app
export default Service.extend({
  store: injectService(),
  flashMessages: injectService('flash-messages'),

  // modelKey: '',
  // queryType: '',

  apiTask: taskGroup(),

  findByIdTask: task(function *(modelKey, id) {
    try {
      const results = yield this
        .get('store')
        .findRecord(`twitch-${modelKey}`, id)
        .then(results => results);

      return results;

    } catch ({ errors }) {
      this._alertOnErrors(errors);
    }
  }).group('apiTask'),

  findAllTask: task(function *(modelKey) {
    try {
      const results = yield this.get('store').findAll(`twitch-${modelKey}`);

      return results;

    } catch ({ errors }) {
      this._alertOnErrors(errors);
    }
  }).group('apiTask'),

  queryTask: task(function *(modelKey, opts = {}) {
    try {
      const results = yield this.get('store').query(`twitch-${modelKey}`, opts);
      debugger;
      return results;

    } catch ({ errors }) {
      debugger;
      this._alertOnErrors(errors);
    }
  }).group('apiTask'),

  findTopVideosTask: task(function *() {
    const videoAdapter = getOwner(this).lookup('adapter:twitch-video');

    try {
      debugger;
      Ember.run.next(() => {
        videoAdapter.set('isFindingTopVideos', true);
      });

      const results = yield this.get('store').findAll('twitch-video');

      return results;

    } catch ({ errors }) {
      this._alertOnErrors(errors);
    }
  }).group('apiTask'),


  isLoadingData: bool('apiTask.isRunning'),

  // findById(modelKey, id) {
  //   return this.get('tasks.findById').perform(modelKey, id);
  // },
  //
  // findAll(modelKey) {
  //   return this.get('tasks.findAll').perform(modelKey);
  // },
  //
  // queryFor(modelKey, opts) {
  //   return this.get('tasks.query').perform(modelKey, opts);
  // },
  //
  // findTopVideos() {
  //   debugger;
  //   return this.get('tasks.findTopVideos').perform();
  // },


  _alertOnErrors(errors) {
    debugger;
    this.get('flashMessages').danger(`${errors[0].detail}`, {
      extendedTimeout: 420
    });
  }
});
