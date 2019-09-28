import Component from '@ember/component';
import layout from '../../templates/components/dds/radio-group';

export default Component.extend({
  layout,
  actions: {
    onChange() {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
