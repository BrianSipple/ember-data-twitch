import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Inflector from 'ember-inflector';
import DS from 'ember-data';

const { inflector } = Inflector;
const { InvalidError } = DS;
const { $: { parseJSON } } = Ember;


export default JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: 'kraken',
  pluralizePath: true,

  /**
   * Determines a path for a given type
   *
   * By default, we'll aim to return camelized, plurailzed forms of the model name,
   * as that's currently the Twitch API's most common pattern. Some resources differ,
   * however, and these cases can be handled by local overrides.
   */
  pathForType: function(modelName) {
    const baseName = modelName.replace('twitch-', '');

    return this.get('pluralizePath') ? camelize(inflector.pluralize(baseName)) : camelize(baseName);
  },

  dataForRequest() {
    const data = this._super(...arguments) || {};
    return data;
  },


  /**
   * Currently, `ajaxOptions` is still the only place to alter
   * the `dataType` request parameter
   * @see: https://github.com/emberjs/data/pull/4357
   */
  ajaxOptions() {
    const hash = this._super(...arguments);
    hash.dataType = this.get('dataType');

    return hash;
  },

  /**
   * @see: https://github.com/justintv/Twitch-API#errors
   */
  parseErrorResponse(responseText) {
    return parseJSON(responseText);
  },

  handleResponse(status, headers, payload) {
    debugger;
    if (status === 404 && 'error' in payload) {
      const { message: errorMessage } = payload;

      return new InvalidError([
        {
          detail: errorMessage,
          source: { pointer: `/data/attributes/` }  // TODO: How should we really make this
        }
      ]);
    }
    return this._super(...arguments);
  }

});
