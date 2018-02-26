(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['categoryitems'];
function CategoryListController(categoryitems) {
	console.log("Inside CategoryListController");
  var cateLstCtrl = this;
  cateLstCtrl.categoryitems = categoryitems;
}

})();