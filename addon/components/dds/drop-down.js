import Component from '@ember/component';
import layout from '../../templates/components/dds/drop-down';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-drop-down'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'navigation',
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
