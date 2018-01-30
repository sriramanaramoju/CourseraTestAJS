(function (){
'use strict';
angular.module('FirstAssignment', [])
.controller('FirstAssignmentController',FirstAssignmentController);
FirstAssignmentController.$inject = ['$scope'];
 function FirstAssignmentController($scope) {
  $scope.name = "";
  $scope.sayHello = function () {
    var comma = ',';
    var stringtosplit = $scope.name;
    console.log(stringtosplit);
    if(stringtosplit != ""){
      var strings = splitString(stringtosplit,comma);
      console.log(strings.length);
      if(strings.length <= 3 && strings.length != 0){
      $scope.stateOfBeing = "Enjoy!";
      }
      else {
        $scope.stateOfBeing = "Too much!";
      }
    }
    else {
        $scope.stateOfBeing = "Please enter data first"
    }
};
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  console.log("Count is:" +arrayOfStrings.length);
  for(var i=0; i<arrayOfStrings.length; i++)
  {
    console.log(arrayOfStrings[i]);
  }
  return arrayOfStrings
};
}
})();
