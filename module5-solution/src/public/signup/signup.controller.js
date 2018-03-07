(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','MyInfoService'];
function SignUpController(MenuService,MyInfoService) {
  var $ctrl = this;
  $ctrl.info={};
  $ctrl.submit= function(){
  	console.log($ctrl.info);
  	MenuService.getMenuItem($ctrl.info.MenuNumber)
  	.then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          console.log($ctrl.info);
          MyInfoService.setInfo($ctrl.info);
        })
  	.catch(function(){
  		$ctrl.invalidFavorite = true;
  	});
  }
 }
})();