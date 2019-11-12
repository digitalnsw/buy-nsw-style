import Component from '@ember/component';
import { inject } from '@ember/service';
import layout from '../templates/components/login-first';

export default Component.extend({
  layout,
  auth: inject(),
  actions: {
    login() {
      this.get('auth').transitToSignin();
    }
  }
});
