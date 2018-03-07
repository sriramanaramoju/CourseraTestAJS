(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'info'];
function MyInfoController(MenuService, info) {
  var $ctrl = this;
  $ctrl.info = info;
  if (info) {
    console.log(info);
    $ctrl.info = info;
    MenuService.getMenuItem(info.MenuNumber)
      .then(function(response) {
        $ctrl.menuItem = response;
        console.log($ctrl.menuItem);
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();