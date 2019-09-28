import Component from '@ember/component';
import layout from '../../templates/components/dds/checkbox-tree';

export default Component.extend({
  layout,
  actions: {
    onChange() {
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      this.set('hasChanged', true);
      if (this.get('onChange')) {
        this.onChange();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
  }
});
