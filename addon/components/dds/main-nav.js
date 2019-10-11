import Component from '@ember/component';
import layout from '../../templates/components/dds/main-nav';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-main-nav au-main-nav--dark'],
  classNameBindings: ['noBorder:au-main-nav--no-border'],
  noBorder: false,
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'main navigation',
});
