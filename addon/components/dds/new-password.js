import Component from '@ember/component';
import layout from '../../templates/components/dds/new-password';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { next } from '@ember/runloop';

export default Component.extend({
  layout,
  passwordStrength: inject(),
  hidePassword: true,
  confirmation: '',
  length: computed('field', function() {
    let field = this.get('field');
    return field == undefined ? 0 : field.length;
  }),
  strength: computed('field', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('field')).score;
  }),
  setValid() {
    let self = this;
    next(() => {
      if (!this.isDestroyed) {
        this.set('valid', 
          (this.get('allowBlank') && this.get('length')==0 || this.get('strength') >= 3) &&
          (!this.get('confirm') || this.get('field') == this.get('confirmation'))
        );
      }
    });
  },
  didReceiveAttrs() {
    this.setValid();
  },
  actions: {
    togglePassword() {
      this.toggleProperty('hidePassword');
    },
    onChange() {
      this.setValid();
    }
  }
});
