import Component from '@ember/component';

import layout from '../../templates/components/dds/avatar-upload';

export default Component.extend({
  layout,

  toBlob(canvas, then) {
    if(canvas.toBlob) {
      canvas.toBlob(then);
    } else {
       let dataURL = canvas.toDataURL();
       let bytes = atob(dataURL.split(',')[1])
       let arr = new Uint8Array(bytes.length);
       for(let i=0; i<bytes.length; i++){
          arr[i]=bytes.charCodeAt(i);
       }
       let blob = new Blob([arr], {type:'image/png'})
       then(blob);
    }
  },

  actions: {
    crop() {
      this.get('overlay').show();
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      let croppedImage = this.get('cropper').getCroppedCanvas();
      let component = this;
      this.toBlob(croppedImage, function (blob) {
        if (blob.size > 10 * 1024 * 1024) {
          component.set('fileError', 'Image should be smaller than 10MB');
          component.get('overlay').hide();
          return;
        }
        component.set('fileError', null);
        component.get('fileService').get('uploadAvatar').perform(
          blob,
          'cropped.png',
          'image/png',
          function(body) {
            component.set('field', body.id);
            component.set('hasChanged', true);
            component.set('imgSrc', null);
            if(component.get('signal') != undefined) {
              component.incrementProperty('signal');
            }
          }, function() {
            component.get('overlay').hide();
          }
        );
      });
    },
    cancel() {
      this.set('imgSrc', null);
    },
    filePicked(file) {
      let component = this;
      this.set('hasChanged', true);
      component.set('imgSrc', null);
      file.readAsDataURL().then((result) => {
        component.set('imgSrc', result);
      })
    },
    remove() {
      this.set('field', null);
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
