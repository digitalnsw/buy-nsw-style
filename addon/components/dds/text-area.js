import Component from '@ember/component';
import layout from '../../templates/components/dds/text-area';

export default Component.extend({
  layout,
  actions: {
    focusOut() {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if (this.get('focusOut')) {
        this.focusOut();
      }
      if (this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    keyUp() {
      this.set('hasChanged', true);
      if (this.get('keyUp')) {
        this.keyUp();
      }
      if (this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
