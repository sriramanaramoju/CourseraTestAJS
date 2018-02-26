(function () {
'use strict';
console.log("inside categories component");
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.component.template.html',
  bindings: {
    categoryitems: '<'
  }
});

})();