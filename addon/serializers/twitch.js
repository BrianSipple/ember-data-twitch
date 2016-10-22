import { isPresent } from 'ember-utils';
import { underscore } from 'ember-string';
import JSONAPISerializer from 'ember-data/serializers/json-api';
import Inflector from 'ember-inflector';
import get from 'ember-metal/get';

const { inflector } = Inflector;


/**
 * Base serializer for the Twicth V3 API.
 *
 * For an example single-record response, @see: https://github.com/justintv/Twitch-API/blob/master/v3_resources/videos.md#example-response
 * For an example collection response, @see: https://github.com/justintv/Twitch-API/blob/master/v3_resources/videos.md#example-response-1
 */
export default JSONAPISerializer.extend({
  /**
   * Response payload key for a model name. This assumes that internally, our
   * client-side models will be prefixed with "twitch-"
   *
   * usage: override this and define in each specific model's serializer
   */
  payloadKeyFromModelName(modelName) {
    return inflector.pluralize(modelName.replace('twitch-', ''));
  },

  /**
   * The "type" value to use for our client-side data store.
   * @see: http://jsonapi.org/format/#document-resource-object-identification
   *
   * 🔑 NOTE: The JSON-API spec is agnostic to whether or not this should
   * be plural or singular (but advises consistency). However,
   * Ember Data appears to expect it to match a valid
   * model name... so we'll be consistent with that.
   */
  clientTypeName(typeClass) {
    return typeClass.modelName;
  },

  primaryKey: '_id',

  linkURLPrefix: '/',

  linkPathFromType(modelName) {
    return this.store.adapterFor(modelName).pathForType(modelName);
  },

  makeSelfLink(modelName, id) {
    const urlPrefix = get(this, 'linkURLPrefix');
    const linkPathName = this.linkPathFromType(modelName);

    return `${urlPrefix}${linkPathName}/${id}`;
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

  /**
   * model property key of relationship => JSON payload key
   * @param key {string} the model key for a given relationship
   * @param relationship {string} the type of relationship (e.g: "belongsTo" or "hasMany")
   */
  keyForRelationship(key/* , relationship, method */) {
    // The most common pattern seems to have the payload key be the actual name
    // of the related model, so by default, we'll just return the key
    return key;
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
    const id = recordHash[get(this, 'primaryKey')];
    const links = { self: selfLink };
    const attributes = this.__extractAttributes(typeClass, recordHash);
    const relationships = this.__extractRelationships(typeClass, recordHash, keyForLink);

    return {
      type,
      id,
      attributes,
      relationships,
      links
    };
  },

  _buildRelationships() {

  },

  __extractAttributes(modelClass, resourceHash /* , serializer */) {
    const attributes = {};

    modelClass.eachAttribute((attributeName) => {
      const payloadKey = this.keyForAttribute(attributeName);

      attributes[attributeName] = resourceHash[payloadKey];
    });

    return attributes;
  },

  /**
   * TODO: How to handle links
   */
  __extractRelationships(modelClass, resourceHash, keyForLink) {
    const relationships = {};
    const resourceLinks = resourceHash[keyForLink] || {};

    modelClass.eachRelationship((relationshipName, { /* kind, */ type /* , options */ }) => {
      const dataKeyInResourceHash = this.keyForRelationship(relationshipName);
      const relationshipData = resourceHash[dataKeyInResourceHash];
      const relationshipLink = { self: resourceLinks[dataKeyInResourceHash] };

      if (isPresent(relationshipLink) || isPresent(relationshipData)) {
        const relationshipSerializer = this.store.serializerFor(type);
        const relationshipPrimaryKey = relationshipSerializer.primaryKey;

        relationships[type] = {
          links: relationshipLink,
          data: { type, id: relationshipData[relationshipPrimaryKey] }
        };
      }

      // TODO: possibly explore more advanced logic (https://github.com/alphasights/ember-graphql-adapter/blob/ec6d2ae53f7a82fa3039e918a8a7d75e7931fdcb/addon/serializer.js#L164)
      // let data;
      // if (options.async) {
      //   // const key = `${singularize(relationshipName)}${suffix}`;
      //   data = this._buildRelationships(type, resourceHash[dataKeyInResourceHash], (elem) => elem);
      //
      // } else {
      //   data = this._buildRelationships(type, resourceHash[dataKeyInResourceHash], (elem) => elem.id);
      // }
    });

    return relationships;
  },


  /**
   * TODO: How to handle "included"
   */
  normalizeResponse(store, primaryModelClass, payload/* , id, requestType*/) {
    // Get the key that the server is using to represent our model
    const recordKey = this.payloadKeyFromModelName(primaryModelClass.modelName);

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
