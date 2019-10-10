import Component from '@ember/component';
import layout from '../../templates/components/dds/jump-to';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-jump-to'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'in page navigation',
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
