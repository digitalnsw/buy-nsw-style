import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/dds/avatar';

export default Component.extend({
  layout,
  images: computed('avatarId', function() {
    let id = this.get('avatarId');

    if (id) {
      return this.fileService.load([id]);
    } else {
      return [];
    }
  }),
});
