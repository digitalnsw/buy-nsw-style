import Component from '@ember/component';
import layout from '../../templates/components/dds/checkbox-array';

export default Component.extend({
  layout,
  allChecked: false,
  init() {
    this._super(...arguments);
    if(!Array.isArray(this.field)){
      this.set('field', []);
    }
  },
  actions: {
    checkAll() {
      this.toggleProperty('allChecked');
      if (this.get('allChecked')) {
        this.set('field', this.get('items').mapBy('key'));
      } else {
        this.set('field', []);
      }
    }
  }
});
