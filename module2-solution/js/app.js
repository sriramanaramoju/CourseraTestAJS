(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var buyctrl = this;
  var length = 4;
  var Itemstobuy = [{itemQuantity: 10, itemName: "Cookies"},{itemQuantity: 10, itemName: "Choclates"},{itemQuantity: 10, itemName: "Icecreams"},{itemQuantity: 10, itemName: "Books"},{itemQuantity: 10, itemName: "Pens"}];
  console.log(buyctrl[1]);
  for (var i=0; i<5; i++)
  {
    console.log("inside");
    console.log(i);
  buyctrl.addItem = (function () { ShoppingListService.addItem(Itemstobuy[i].itemName, Itemstobuy[i].itemQuantity); console.log(Itemstobuy[i]) })();
  }
  buyctrl.items = ShoppingListService.getItems();
  buyctrl.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
    ShoppingListService.moveitem(itemIndex);
    console.log(buyctrl.items.length);
    length =buyctrl.items.length;
    console.log(length);
  };
}
AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtctrl = this;

  //boughtctrl.items = ShoppingListService.getItems();

  boughtctrl.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];
  var moveditems = [];
  service.addItem = function (itemName, quantity) {
    console.log("ram");
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
    console.log(items[4]);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.moveitem = function (itemindex) {
    moveditems.push(items[itemindex]);
    console.log(moveditems[0]);
        console.log(moveditems[1]);
  }

  service.getItems = function () {
    return items;
  };
}
})();
