import Component from '@ember/component';
import layout from '../../templates/components/dds/template-header';

export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['au-header au-header--dark'],
  attributeBindings: ['role'],
  role: 'banner',
  actions: {
    logout() {
      this.get("auth").logout();
    }
  },
});
