module GroceryListApp {
  app.component("itemsNeeded", {
    templateUrl: "components/items-needed/items-needed.component.html",
    controller: function (groceryItemsService) {
        var ctrl = this;
        ctrl.itemsNeeded = [];
        ctrl.tempRemoveItemIndex = "";
        ctrl.tempEditItemIndex = "";
        ctrl.newItem = {
            name: "",
            cost: "",
            type: "",
            quantity: "",
            expiration: ""
        };
        ctrl.editItemFields = {
            name: "",
            cost: "",
            type: "",
            quantity: "",
            expiration: ""
        };
        ctrl.$onInit = function () {
            ctrl.itemsNeeded = groceryItemsService.items.neededItems;
        };
        ctrl.createItemNeeded = function () {
            ctrl.itemsNeeded.push(ctrl.createItemNeededObject());
            clearNewItemInputFields();
        };
        ctrl.createItemNeededObject = function () {
            return {
                name: ctrl.newItem.name,
                cost: ctrl.newItem.cost,
                type: ctrl.newItem.type,
                quantity: ctrl.newItem.quantity,
                expiration: ctrl.newItem.expiration
            };
        };
        function clearNewItemInputFields() {
            ctrl.newItem.name = "";
            ctrl.newItem.quantity = "";
            ctrl.newItem.cost = "";
            ctrl.newItem.type = "";
            ctrl.newItem.expiration = "";
        }
        ctrl.setRemoveItemIndex = function (index) {
            ctrl.tempRemoveItemIndex = index;
        };
        ctrl.removeItemNeeded = function (item) {
            ctrl.itemsNeeded.splice(ctrl.tempRemoveItemIndex, 1);
            ctrl.tempRemoveItemIndex = "";
        };
        ctrl.purchaseItemsNeeded = function () {
            groceryItemsService.setNeededItems(ctrl.itemsNeeded); 
            groceryItemsService.purchasedNeededItems();
            ctrl.itemsNeeded = [];
        };
        ctrl.setEditItemFields = function (index) {
            ctrl.tempEditItemIndex = index;
            ctrl.editItemFields = ctrl.itemsNeeded[ctrl.tempEditItemIndex];
        };
        ctrl.updateEditedItem = function () {
            ctrl.itemsNeeded[ctrl.tempEditItemIndex] = ctrl.editItemFields;
            ctrl.tempEditItemIndex = "";
        };
    }
});

}
