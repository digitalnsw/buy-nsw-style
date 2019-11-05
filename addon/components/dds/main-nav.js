import Component from '@ember/component';
import layout from '../../templates/components/dds/main-nav';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-main-nav au-main-nav--dark'],
  classNameBindings: ['noBorder:au-main-nav--no-border'],
  noBorder: false,
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'main navigation',
  willRender() {
    // Set the "mainlinks" property to a JavaScript array of link objects
    // each link object contains name (link text), route, and (optional) param
    // combination of https://guides.emberjs.com/release/templates/displaying-a-list-of-items/ and 
    // https://guides.emberjs.com/release/templates/displaying-the-keys-in-an-object/
    this.set('mainlinks', [
      { name: 'Supplier list', route: 'cloud-sellers' },
      { name: 'Cloud products', route: 'cloud-search', param: 'all' },
      { name: 'Help', route: 'help-page' },
      { name: 'Dashboard', route: 'seller-dashboard' }
    ]);
  }
});
 