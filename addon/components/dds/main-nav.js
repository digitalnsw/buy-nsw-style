import Component from '@ember/component';

export default Component.extend({
  currentPath: null,
  router: inject(),
  willRender() {
    this._super(...arguments);
    this.set('currentPath', this.get('router.currentRouteName') );
  }
});
