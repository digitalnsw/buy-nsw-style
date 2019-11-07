import Component from '@ember/component';
import layout from '../../templates/components/dds/text-input-simple';

export default Component.extend({
  layout,
  classNames: ['simple-form__wrap'],
  actions: {
    keyUp() {
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      this.set('hasChanged', true);
      if (this.get('keyUp')) {
        this.keyUp();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
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
