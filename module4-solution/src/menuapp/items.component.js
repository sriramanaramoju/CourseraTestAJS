(function () {
'use strict';

console.log("inside items component");
angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.component.template.html',
  bindings: {
    menuitems: '<'
  }
});

})();