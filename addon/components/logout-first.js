import Component from '@ember/component';
import { inject } from '@ember/service';
import layout from '../templates/components/logout-first';

export default Component.extend({
  layout,
  auth: inject(),
  actions: {
    logout() {
      this.get('auth').logout(false);
    }
  }
});
