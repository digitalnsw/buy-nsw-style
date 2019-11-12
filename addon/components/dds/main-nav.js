import Component from '@ember/component';
import layout from '../../templates/components/dds/main-nav';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['au-main-nav au-main-nav--dark'],
  classNameBindings: ['noBorder:au-main-nav--no-border'],
  noBorder: false,
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'main navigation',
  items: computed('auth.isSeller', 'auth.isBuyer', 'auth.isAdmin', function(){
    return [
      {
        label: "Supplier list",
        route: "cloud-sellers",
      },
      {
        label: "Cloud products",
        route: "cloud-search",
        param: "all",
      },
      {
        label: "Help",
        route: "help-page",
      },
      {
        label: "Dashboard",
        route: "seller-dashboard",
        hide: !this.get('auth.isSeller'),
      },
      {
        label: "Dashboard",
        route: "buyer-dashboard",
        hide: !this.get('auth.isBuyer'),
      }
    ];
  })
});
