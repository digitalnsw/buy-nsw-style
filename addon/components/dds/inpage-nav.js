import Component from '@ember/component';
import layout from '../../templates/components/dds/inpage-nav';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-inpage-nav-links'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'in page navigation'
});
