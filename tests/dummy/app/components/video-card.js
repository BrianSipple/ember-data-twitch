import Component from 'ember-component';
import computed from 'ember-computed';
import layout from '../templates/components/video-card';

const { readOnly } = computed;


export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['c-card', 'c-video-card', 'o-widget-box', 'o-content-box', 'u-relative'],

  video: null,

  title: readOnly('video.title'),
  // description: readOnly('video.description') || '(No description)',
  description: `I'll keep all my plans close to my chest. I'll wait here and see which way the wind will blow`.repeat(10).toUpperCase(),
  viewCount: readOnly('video.views') || 0,
  game: readOnly('video.game'),
  previewSrc: readOnly('video.preview'),
  channelName: readOnly('video.channel.name'),
  channelLink: readOnly('video.channel.url')
});
