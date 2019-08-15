import Component from '@ember/component';

export default Component.extend({
  checked: false,
  init() {
    this._super(...arguments);
    this.set('checked', this.field.includes(this.get('name')));
  },
  actions: {
    toggle() {
      var fieldValue = this.get('name');

      if(this.field.includes(fieldValue)) {
        this.field.removeObject(fieldValue);
        this.set('checked', false);
      } else {
        this.field.pushObject(fieldValue);
        this.set('checked', true);
      }

      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
