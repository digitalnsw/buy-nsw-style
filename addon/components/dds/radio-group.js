import Component from '@ember/component';

export default Component.extend({
  actions: {
    onChange() {
      this.set('hasChanged', true);
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
