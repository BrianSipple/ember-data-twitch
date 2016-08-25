import Service from 'ember-service';
import injectService from 'ember-service/inject';
import { task, taskGroup } from 'ember-concurrency';
import { bool } from 'ember-computed';


export default Service.extend({
  store: injectService(),
  flashMessages: injectService('flash-messages'),

  apiTask: taskGroup(),

  findByIdTask: task(function *(modelKey, id) {
    try {
      const results = yield this
        .get('store')
        .findRecord(`twitch-${modelKey}`, id);

      return results;

    } catch (e) {
      this._alertOnErrors(e);
    }
  }).group('apiTask'),

  findAllTask: task(function *(modelKey) {
    try {
      const results = yield this.get('store').findAll(`twitch-${modelKey}`);

      return results;

    } catch (e) {
      this._alertOnErrors(e);
    }
  }).group('apiTask'),

  queryTask: task(function *(modelKey, opts = {}) {
    try {
      const results = yield this
        .get('store')
        .query(`twitch-${modelKey}`, opts)
        .then(results => {
          return results.toArray();
        });

      return results;

    } catch (e) {
      this._alertOnErrors(e);
    }
  }).group('apiTask'),

  isLoadingData: bool('apiTask.isRunning'),

  _alertOnErrors(error) {
    debugger;
    this.get('flashMessages').danger(error, {
      extendedTimeout: 420
    });
    // this.get('flashMessages').danger(`${errors[0].detail}`, {
    //   extendedTimeout: 420
    // });
  }
});
