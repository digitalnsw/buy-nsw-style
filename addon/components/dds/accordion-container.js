import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  expanded: false,
  collapsable: true,
  expandedClass: computed('expanded', function() {
    return {
      true: 'au-accordion--open',
      false: 'au-accordion--closed'
    }[this.expanded];
  }),
  actions: {
    toggle() {
      this.toggleProperty('expanded');
    }
  }
});
