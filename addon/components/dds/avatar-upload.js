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
      let croppedImage = this.get('cropper').getCroppedCanvas();
      let component = this;
      this.toBlob(croppedImage, function (blob) {
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
          }
        );
      });
    },
    cancel() {
      this.set('imgSrc', null);
    },
    filePicked(file) {
      let component = this;
      component.set('imgSrc', null);
      file.readAsDataURL().then((result) => {
        component.set('imgSrc', result);
      })
    }
  }
});
