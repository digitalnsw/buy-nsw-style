import Component from '@ember/component';
import layout from '../../templates/components/dds/template-header';

export default Component.extend({
  layout,
  actions: {
    logout() {
      this.get("auth").logout();
    }
  },
});
