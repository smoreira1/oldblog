var GroceryListApp;
(function (GroceryListApp) {
    app.factory('groceryItemsService', function () {
        var groceryItemsService = {
            items: { neededItems: [], purchasedItems: [] },
            getPurchaseItems: function () {
                return this.items.purchasedItems;
            },
            getNeededItems: function () {
                return this.items.neededItems;
            },
            setNeededItems: function(arr){
                this.items.neededItems = arr;
            },
            purchasedNeededItems: function () {
                console.log(this.items.neededItems);
                this.items.purchasedItems.push.apply(this.items.purchasedItems, this.items.neededItems);
                this.items.neededItems = [];
            },
            removeNeededItem: function (index) {
                this.items.neededItems.splice(index, 1);
            },
            removePurchasedItem: function (index) {
                this.items.purchasedItems.splice(index, 1);
            }
        };
        return groceryItemsService;
    });
})(GroceryListApp || (GroceryListApp = {}));
