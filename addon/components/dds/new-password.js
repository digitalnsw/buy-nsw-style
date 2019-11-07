import Component from '@ember/component';
import layout from '../../templates/components/dds/new-password';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  layout,
  passwordStrength: inject(),
  hidePassword: true,
  length: computed('field', function() {
    let field = this.get('field');
    return field == undefined ? 0 : field.length;
  }),
  strength: computed('field', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('field')).score;
  }),
  actions: {
    togglePassword() {
      this.toggleProperty('hidePassword');
    },
    onChange() {
      this.set('strong', this.get('allowBlank') && this.get('length')==0 || this.get('strength') >= 3);
    }
  }
});
