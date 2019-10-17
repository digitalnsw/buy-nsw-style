import Component from '@ember/component';
import layout from '../../templates/components/dds/drop-down';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['drop-down'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'navigation',
  isOpen: false,
  router: service(),
  //currentRouteName: computed.notEmpty('router.currentRoute.name'), // same result as line below
  currentRouteName: computed.notEmpty('router.currentRouteName'),
  currentPath: computed.notEmpty('router.currentPath'),
  
  actions: {
    onToggle(){
      this.toggleProperty("isOpen");
    },
    onClose() {
      this.set("isOpen", false);
    },
    logout() {
      this.get("auth").logout();
    }
  },
});
