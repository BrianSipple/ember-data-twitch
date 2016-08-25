import DS from 'ember-data';

const { JSONAPIAdapter } = DS;


export default JSONAPIAdapter.extend({

  urlForQuery(query, modelName) {
    const url = this._super(...arguments);

    return query.method === 'follows' ?
    if (query.method === 'follows') {
      return ``
    }
  }
});
