import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/dds/avatar';

export default Component.extend({
  layout,
  image: computed('avatarId', function() {

    let avatarId = this.get('avatarId');

    if (avatarId) {
      return this.fileService.loadAvatar(avatarId);
    } else {
      return null;
    }
  }),
});
