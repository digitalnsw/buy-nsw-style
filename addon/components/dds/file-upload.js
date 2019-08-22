import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import layout from '../../templates/components/dds/file-upload';

export default Component.extend({
  layout,
  store: inject(),
  auth: inject(),
  documents: null,
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
      if(this.get('multiple') && !Array.isArray(this.field)){
        this.set('field', []);
      }
      let component = this;
      component.set('documents', []);
      if(this.get('multiple')) {
        if (this.get('field').length > 0) {
          this.fileService.load(this.get("field")).then((response) => {
            component.set('documents', response.toArray());
          });
        }
      } else {
        if (this.get('field')) {
          this.fileService.load([this.get("field")]).then((response) => {
            component.set('documents', response.toArray());
          });
        }
      }
    }
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
            component.set('documents', [ response ]);
          }
        });
      })
    }
  }
});
