import DS from 'ember-data';

const { Model, hasMany, attr } = DS;


export default Model.extend({
  name: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  logo: attr('string'),
  displayName: attr('string'),
  email: attr('string'),
  partnered: attr('boolean'),
  bio: attr('string'),
  notifications: attr(),

  streamsFollowed: belongsTo('twitch-stream'),
  videosFollowed: belongsTo('twitch-video')

});
