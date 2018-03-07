(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;

  service.setInfo = function (info) {
    service.info = info;
    console.log(service.info);
  };

  service.getInfo = function() {
  	console.log(service.info);
    return service.info;
  }
};

})();