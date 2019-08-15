import Component from '@ember/component';

export default Component.extend({
  actions: {
    focusOut() {
      this.set('hasChanged', true);
      if (this.get('focusOut')) {
        this.focusOut();
      }
    }
  }
});
