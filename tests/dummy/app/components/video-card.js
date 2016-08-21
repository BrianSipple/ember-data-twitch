import Component from 'ember-component';
import computed from 'ember-computed';
import layout from '../templates/components/video-card';

const { readOnly } = computed;


export default Component.extend({
  layout,

  classNames: ['c-video-card', 'o-widget-box'],
  video: null,

  title: readOnly('video.title'),
  description: readOnly('video.description') || '(No description)',
  viewCount: readOnly('video.views') || 0,
  game: readOnly('video.game'),
  previewSrc: readOnly('video.preview')
});
