import Component from '@ember/component';
import layout from '../../templates/components/dds/accordion-container';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
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
