import Component from 'ember-component';
import { readOnly } from 'ember-computed';
import layout from '../templates/components/video-card';

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['c-card', 'c-video-card', 'o-widget-box', 'o-content-box', 'u-relative'],

  video: null,

  title: readOnly('video.title'),
  description: readOnly('video.description') || '(No description)'.repeat(50),
  viewCount: readOnly('video.views') || 0,
  game: readOnly('video.game'),
  previewSrc: readOnly('video.preview'),
  channelName: readOnly('video.channel.name'),
  channelLink: readOnly('video.channel.url')
});
