import DS from 'ember-data';

const { Model, attr, belongsTo } = DS

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  broadcastId: attr('string'),
  status: attr('string'),
  tagList: attr(),
  recordedAt: attr('string'),
  game: attr('string'),
  length: attr('number'),
  preview: attr('string'),
  url: attr('string'),
  views: attr('number'),
  broadcastType: attr('string'),

  /**
   * This isn't a channel Id, but rather an object containing
   * a "name" and "display_name"
   */
  channel: belongsTo('twitch-channel')
});
