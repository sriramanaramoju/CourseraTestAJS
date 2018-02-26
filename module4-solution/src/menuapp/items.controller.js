(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['menuitems'];
function ItemsController(menuitems) {
	console.log("ItemsController");
  var itemsCtrl = this;
  itemsCtrl.menuitems = menuitems;
}

})();