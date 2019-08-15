import Component from '@ember/component';
import layout from '../../templates/components/dds/main-nav';

export default Component.extend({
  layout,
  currentPath: null,
  router: inject(),
  willRender() {
    this._super(...arguments);
    this.set('currentPath', this.get('router.currentRouteName') );
  }
});
