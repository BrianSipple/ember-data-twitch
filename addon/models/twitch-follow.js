import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  createdAt: attr('data'),
  updatedAt: attr('data'),
  notifications: attr('boolean'),

  user: belongsTo('twitch-user'),
  channel: belongsTo('twitch-channel'),
  stream: belongsTo('twitch-stream')
});
