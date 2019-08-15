import Component from '@ember/component';

export default Component.extend({
  actions: {
    keyUp() {
      this.set('apiError', '');
      this.set('hasChanged', true);
    },
    focusOut() {
      this.set('hasChanged', true);
      if (this.get('focusOut')) {
        this.focusOut();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
