import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/dds/file-download';

export default Component.extend({
  layout,
  documents: computed('field', function() {
    let ids = this.get('field');

    if (!this.get('multiple') && ids != null) {
      ids = [ ids ];
    }

    if (ids && ids.length > 0) {
      return this.fileService.loadDocument(ids);
    } else {
      return [];
    }
  }),
});
