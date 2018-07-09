module GroceryListApp {

  app.component("itemsPurchased", {
    templateUrl: "components/items-purchased/items-purchased.component.html",
    controller: function (groceryItemsService) {
        var ctrl = this;
        ctrl.itemsPurchased = [];
        ctrl.$onInit = function () {
            ctrl.itemsPurchased = groceryItemsService.items.purchasedItems;
        };
        ctrl.removePurchasedItem = function (index) {
            groceryItemsService.removePurchasedItem(index);
        };
    }
  });
}