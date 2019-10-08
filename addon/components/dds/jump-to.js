import Component from '@ember/component';
import layout from '../../templates/components/dds/jump-to';

export default Component.extend({
  layout,
  isOpen: false,
  
  actions: {
    onToggle(){
      this.toggleProperty("isOpen");
    },
    onClose() {
      this.set("isOpen", false);
    },
  },
});
