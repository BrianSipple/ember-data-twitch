// import XButton from './x-button';
import computed from 'ember-computed';
import Component from 'ember-component';
import layout from '../templates/components/icon-button';

export default Component.extend({
  layout,
  tagName: 'button',
  attributeBindings: ['disabled', 'aria-label'],

  classNames: ['c-button', 'c-button--icon-button'],
  classNameBindings: ['tapTargetSizeClass'],

  disabled: false,
  'aria-label': null,
  iconURL: null,
  stroke: 'currentColor',
  fill: 'currentColor',
  strokeWidth: '0.125em',
  iconWidth: '75%',
  iconHeight: '75%',
  ariaHidden: true,
  size: 'md',

  tapTargetSizeClass: computed('size', {
    get() {
      const size = (this.get('size') || 'md').toLowerCase();

      return {
        sm: 'o-tap-target--sm',
        small: 'o-tap-target--sm',
        md: 'o-tap-target--md',
        medium: 'o-tap-target--md',
        lg: 'o-tap-target--lg',
        large: 'o-tap-target--lg'
      }[size];
    }
  })
});
