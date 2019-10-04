import Component from '@ember/component';
import layout from '../../templates/components/dds/bread-crumbs';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-breadcrumbs'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'breadcrumb'
});
