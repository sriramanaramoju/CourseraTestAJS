(function () {
"use strict";

angular.module('public')
.component('menuCategory', {
  templateUrl: 'src/public/menu-category/menu-category.html',
  bindings: {
    category: '<' //We can name it anything we want instead of category, but should be in small case
  }
});
})();
