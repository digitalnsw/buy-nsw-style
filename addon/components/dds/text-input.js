import Component from '@ember/component';
import layout from '../../templates/components/dds/text-input';

export default Component.extend({
  layout,
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
