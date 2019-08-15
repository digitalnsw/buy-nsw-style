import Component from '@ember/component';

export default Component.extend({
  actions: {
    selectRadio() {
      this.set('field', this.get('value'));
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
