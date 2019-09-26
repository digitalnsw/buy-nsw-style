import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import layout from '../../templates/components/dds/file-upload';

export default Component.extend({
  layout,
  store: inject(),
  auth: inject(),
  documents: null,
  fileTypes: ["image/jpeg", "image/png", "application/pdf"],

  fieldAndDocumentsMatch: computed('multiple', 'field', 'documents', function() {
    if(this.get('documents') == null) {
      return false;
    }
    let ids = this.get('field');
    if (this.get('multiple')) {
      if ( ids == null ) {
        ids = [];
      }
    } else {
      if (ids == null) {
        ids = [];
      } else {
        ids = [ids];
      }
    }
    let docIds = this.get('documents').map(doc => doc.id);
    if (ids.length != docIds.length) {
      return false;
    }
    for(let i = 0 ; i < ids.length ; i++) {
      if (ids[i] != docIds[i]) {
        return false;
      }
    }
    return true;
  }),
  didReceiveAttrs() {
    this._super(...arguments);
    if (!this.get('fieldAndDocumentsMatch')) {
      let component = this;
      component.set('documents', []);
      if(this.get('multiple')) {
        if (this.get('field').length > 0) {
          this.fileService.loadDocument(this.get("field")).then((response) => {
            component.set('documents', response.toArray());
          });
        }
      } else {
        if (this.get('field')) {
          this.fileService.loadDocument([this.get("field")]).then((response) => {
            component.set('documents', response.toArray());
          });
        }
      }
    }
  },
  actions: {
    removeDocument(index) {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if (this.get('multiple')) {
        this.field.removeAt(index);
      } else {
        this.set('field', null);
      }
      this.documents.removeAt(index);
      if (this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    uploadDocument(file) {
      if(!this.get('fileTypes').includes(file.blob.type)) {
        this.set('fileError', 'File type is not valid');
        return;
      }
      if (file.blob.size > 10 * 1024 * 1024) {
        this.set('fileError', 'File should be smaller than 10MB');
        return;
      }
      this.set('fileError', null);
      this.get('overlay').show();
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      this.set('hasChanged', true);
      let component = this;
      let fileService = this.get('fileService');
      let multiple = component.get('multiple');

      fileService.get('uploadDocument').perform(file, function(body){
        fileService.find(body.id).then((response) =>{
          if (multiple) {
            component.field.pushObject(body.id);
            component.documents.pushObject(response);
          } else {
            component.set('field', body.id);
            component.set('documents', [ response ]);
          }
          if (component.get('signal') != undefined) {
            component.incrementProperty('signal');
          }
        });
      }, function() {
        component.get('overlay').hide();
      })
    }
  }
});
