import { isPresent } from 'ember-utils';
import EmberString from 'ember-string';
import JSONAPISerializer from 'ember-data/serializers/json-api';
import Inflector from 'ember-inflector';

const { inflector } = Inflector;
const { underscore } = EmberString;


/**
 * Base serializer for the Twicth V3 API.
 *
 * For an example single-record response, @see: https://github.com/justintv/Twitch-API/blob/master/v3_resources/videos.md#example-response
 * For an example collection response, @see: https://github.com/justintv/Twitch-API/blob/master/v3_resources/videos.md#example-response-1
 */
export default JSONAPISerializer.extend({

  /**
   * Model type as conceptualized by the server. Internally, (that is,
   * for our client-side models, this name will be prefixed with "twitch-")
   *
   * usage: override this and define in each specific model's serializer
   */
  serverRecordKey(modelName) {
    return inflector.pluralize(modelName.replace('twitch-', ''));
  },

  /**
   * The "type" value to use for our client-side data store.
   */
  clientTypeName(typeClass) {
    return typeClass.modelName;
  },

  primaryKey: '_id',

  relationshipPrimaryKeys: {
    'twitch-channel': 'name'
  },

  /**
   * Converts an attribute name in the model to a JSON payload key.
   *
   * The API expects compound words in snake_case, so we'll "decamelize"
   * our model names
   */
  keyForAttribute(attr /* , method */) {
    return underscore(attr);
  },

  keyForRelationship(key/* , relationship, method */) {
    return key.replace('twitch-', '');
  },

  modelNameFromPayloadKey(key) {
    return `twitch-${key}`;
  },

  keyForLink(/* key, kind */) {
    return '_links';
  },

  normalize(typeClass, recordHash) {
    const keyForLink = this.keyForLink();
    const selfLink = recordHash[keyForLink] ? recordHash[keyForLink].self : {};

    const type = this.clientTypeName(typeClass);
    const id = recordHash[this.get('primaryKey')];
    const links = { self: selfLink };
    const attributes = this.__extractAttributes(typeClass, recordHash);
    const relationships = this.__extractRelationships(typeClass, recordHash);

    return { type, id, attributes, relationships, links };
  },

  _buildRelationships() {

  },

  __extractAttributes(modelClass, resourceHash /* , serializer */) {
    const attributes = {};

    let payloadKey;
    modelClass.eachAttribute((attributeName) => {
      payloadKey = this.keyForAttribute(attributeName);

      attributes[attributeName] = resourceHash[payloadKey];
    });

    return attributes;
  },

  /**
   * TODO: How to handle links
   */
  __extractRelationships(modelClass, resourceHash) {
    const relationships = {};

    modelClass.eachRelationship((relationshipName/* , { kind, type, options } */) => {
      const keyInResourceHash = this.keyForRelationship(relationshipName);
      // const relationshipPrimaryKey = this.relationshipPrimaryKeys[relationshipName] || this.primaryKey;
      const modelName = this.modelNameFromPayloadKey(keyInResourceHash);

      // TODO: Explore possibly more advanced logic (https://github.com/alphasights/ember-graphql-adapter/blob/ec6d2ae53f7a82fa3039e918a8a7d75e7931fdcb/addon/serializer.js#L164)
      // let data;
      // if (options.async) {
      //   // const key = `${singularize(relationshipName)}${suffix}`;
      //   data = this._buildRelationships(type, resourceHash[keyInResourceHash], (elem) => elem);
      //
      // } else {
      //   data = this._buildRelationships(type, resourceHash[keyInResourceHash], (elem) => elem.id);
      // }
      const data = { type: this.clientTypeName(modelName), id: resourceHash[keyInResourceHash].relationshipPrimaryKey };

      if (isPresent(data)) {
        relationships[relationshipName] = { data };
      }
    });

    return relationships;
  },


  /**
   * TODO: How to handle "included"
   */
  normalizeResponse(store, primaryModelClass, payload/* , id, requestType*/) {
    // Get the key that the server is using to represent our model
    const recordKey = this.serverRecordKey(primaryModelClass.modelName);

    // the resource will either be a list at the `recordKey` property (collection responses),
    //  or the root of the payload (single responses)
    const recordData = payload[recordKey] || payload;

    if (Array.isArray(recordData)) {
      return {
        data: recordData.map(record => this.normalize(primaryModelClass, record))
      };
    }

    return { data: this.normalize(primaryModelClass, recordData) };
  },

  /**
   * handle `findBelongsTo` responses identically to the way we handle `findRecord` responses
   */
  normalizeFindBelongsToResponse() {
    return this.normalizeFindRecordResponse(...arguments);
  },

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    const documentHash = this._hashArrayResponse(primaryModelClass, payload);

    return this._super(store, primaryModelClass, documentHash, id, requestType);
  }
});
