import Component from '@ember/component';
import layout from '../../templates/components/dds/template-footer';

export default Component.extend({
  layout,
  tagName: 'footer',
  classNames: ['au-footer au-footer--dark au-body au-body--dark'],
  attributeBindings: ['role'],
  role: 'contentinfo'
});
