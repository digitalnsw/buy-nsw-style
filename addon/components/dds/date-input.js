import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  min: '1800-01-01',
  max: '2100-01-01',
  actions: {
    focusOut() {
      this.set('hasChanged', true);
    }
  }
});
