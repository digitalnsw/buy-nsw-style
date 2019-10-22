import Component from '@ember/component';
import layout from '../../templates/components/dds/progress-indicator';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['au-progress-indicator'],
  activeMenu: null,
  didReceiveAttrs() {
    this._super(...arguments);
    let self = this;
    this.set('activeMenu', null);
    this.get('items').forEach(function(item) {
      if(item.subItems) {
        let todo = true;
        let done = true;
        item.subItems.forEach(function(subItem) {
          if(subItem.step == self.get('stepName')) {
            self.set('activeMenu', item.step);
          }
          if(subItem.status == 'doing' || (subItem.status == 'todo' && !subItem.optional)) {
            done = false;
          }
          if(subItem.status != 'todo') {
            todo = false;
          }
        });
        if(todo) {
          item.status = 'todo';
        } else if(done) {
          item.status = 'done';
        } else {
          item.status = 'doing';
        }
      }
    });
  }
});
