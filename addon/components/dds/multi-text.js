import Component from '@ember/component';
import layout from '../../templates/components/dds/multi-text';

export default Component.extend({
  layout,
  actions: {
    addRow() {
      this.field.pushObject('');
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    removeRow(index) {
      this.field.removeAt(index);
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
