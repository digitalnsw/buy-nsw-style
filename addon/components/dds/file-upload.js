import Component from '@ember/component';
import Ember from 'ember';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';
import layout from '../../templates/components/dds/file-upload';

export default Component.extend({
  layout,
  store: inject(),
  auth: inject(),
  documents: [],
  signalBack() {
    if(this.get('signal') != undefined) {
      this.incrementProperty('signal');
    }
  },
  reloadDocuments() {
    console.log('*');
    if(this.get('multiple')) {
      if(!Array.isArray(this.field)){
        this.set('field', []);
      }
      let component = this;
      component.set('documents', []);
      if (this.get('field').length > 0) {
        this.fileService.load(this.get("field")).then((response) => {
          component.set('documents', response.toArray());
        });
      }
    } else {
      let component = this;
      component.set('documents', []);
      if (this.get('field')) {
        this.fileService.load([this.get("field")]).then((response) => {
          component.set('documents', response.toArray());
        });
      }
    }
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.reloadDocuments();
  },
  actions: {
    removeDocument(index) {
      this.set('hasChanged', true);
      if (this.get('multiple')) {
        this.field.removeAt(index);
      } else {
        this.set('field', null);
      }
      this.documents.removeAt(index);
      // this.signalBack();
    },
    uploadDocument(file) {
      this.set('hasChanged', true);
      let component = this;
      let fileService = this.fileService;
      let multiple = component.get('multiple');
      fileService.get('upload').perform(file, function(body){
        if (multiple && component.get('field') == null) {
          component.set('field', []);
        }
        fileService.find(body.id).then((response) =>{
          if (multiple) {
            component.field.pushObject(body.id);
            component.documents.pushObject(response);
          } else {
            component.set('field', body.id);
            component.set('documents', response);
          }
        });
        // component.signalBack();
      })
    }
  }
});
