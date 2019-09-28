import Component from '@ember/component';
import layout from '../../templates/components/dds/checkbox-input';

export default Component.extend({
  layout,
  actions: {
    toggle() {
      this.toggleProperty('field');
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
