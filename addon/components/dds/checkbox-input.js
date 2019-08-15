import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle() {
      this.toggleProperty('field');
      this.set('hasChanged', true);
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
