import Component from '@ember/component';
import layout from '../../templates/components/dds/banner';

export default Component.extend({
  layout,
  classNames: ['au-banner'],
  classNameBindings: ['light:au-banner--light']
});
