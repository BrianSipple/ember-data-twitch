import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  broadcastId: attr('number'),
  status: attr('string'),
  tagList: attr(),
  recordedAt: attr('date'),
  game: attr(),
  length: attr('number'),
  preview: attr('string'),
  url: attr('string'),
  views: attr('number'),
  broadcastType: attr('number')

  // channel: belongsTo('channel')
});
