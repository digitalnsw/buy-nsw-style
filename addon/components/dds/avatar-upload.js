import Component from '@ember/component';

import layout from '../../templates/components/dds/avatar-upload';

export default Component.extend({
  layout,
  croppedAvatar: null,
  container: "cropper-container",
  counter: 0,

  toBlob(canvas, then) {
    if(canvas.toBlob) {
      canvas.toBlob(then);
    } else {
       let dataURL = canvasImage.toDataURL();
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
    upload() {
      let component = this;
      this.get('fileService').get('uploadAvatar').perform(
        this.get('cropBlob'),
        'cropped.png',
        'image/png',
        function(body) {
          component.set('field', body.id);
          component.set('hasChanged', true);
          component.set('imgSrc', null);
          component.set('croppedAvatar', null);
          component.set('cropBlob', null);
        }
      );
    },
    crop() {
      let croppedImage = this.get('cropper').getCroppedCanvas();
      this.set('croppedAvatar', croppedImage);
      let component = this;
      this.toBlob(croppedImage, function (blob) {
        component.set('cropBlob', blob);
      });
    },
    filePicked(file) {
      let component = this;
      component.set('imgSrc', null);
      component.set('croppedAvatar', null);
      file.readAsDataURL().then((result) => {
        component.set('imgSrc', result);
      })
    }
  }
});