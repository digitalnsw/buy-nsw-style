import Component from '@ember/component';
import layout from '../../templates/components/dds/select-box';

export default Component.extend({
  layout,
  actions: {
    onChange(value) {
      this.set('field', value);
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
