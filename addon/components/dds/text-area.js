import Component from '@ember/component';
import layout from '../../templates/components/dds/text-area';

export default Component.extend({
  layout,
  actions: {
    focusOut() {
      this.set('hasChanged', true);
      if (this.get('focusOut')) {
        this.focusOut();
      }
    }
  }
});
