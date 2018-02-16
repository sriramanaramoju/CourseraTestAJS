(function() {
  'use strict';
  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
    list.isEmpty = function() {
      if(list.found != undefined && list.found.length === 0 )
        return true;
      else
        return false;
      //return list.found != undefined && list.found.length === 0;
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = "";

    ctrl.getSearchedItemList = function() {
      if (ctrl.searchTerm === "") {
        ctrl.itemsFound = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(response) {
        ctrl.itemsFound = response;
      })
      .catch(function(error) {
        console.log("Something went wrong", error);
      });
    };

    ctrl.removeItem = function(index) {
      ctrl.itemsFound.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
          method: 'GET',
          url: (ApiBasePath + "/menu_items.json"),
        }).then(function (result) {
        var itemsFound = [];
        var fulldata= result.data;
        for(var i=0;i<fulldata.menu_items.length;i++)
        {
          var itemdescription=fulldata.menu_items[i].description.toLowerCase();
          if(itemdescription.indexOf(searchTerm.toLowerCase()) >= 0){
          itemsFound.push(fulldata.menu_items[i]);
          }
        }
        for(var i=0;i<itemsFound.length;i++)
        {
          console.log("final: "+ itemsFound[i].name + ", " + itemsFound[i].short_name + ", "+ itemsFound[i].description);
        }
          console.log("length is: " +itemsFound.length);

        return itemsFound;
      });
    };
  }

}
)();