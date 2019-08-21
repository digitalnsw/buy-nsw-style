import Component from '@ember/component';
import { inject } from '@ember/service';
import layout from '../../templates/components/dds/page-feedback';

export default Component.extend({
  layout,
  router: inject(),
  activated: false,
  feedback: null,

  actions: {
    cancelFeedback() {
      this.set('activated', false);
      this.set('feedback', null);
    },
    initiateFeedback() {
      this.set('feedback', this.get('feedbackService').createRecord());
      this.set('activated', true);
    },
    sendFeedback() {
      this.set('activated', false);
      this.get('feedbackService').save(this.get('feedback'));
    }
  },
  init() {
    this._super(...arguments);
    let self = this;
    this.router.on('routeWillChange', () => {
      if ( !(self.get('isDestroyed') || self.get('isDestroying')) ) {
        self.get('feedbackService').unloadAll();
        self.set('activated', false);
        self.set('feedback', null);
      }
    })
  }
});
