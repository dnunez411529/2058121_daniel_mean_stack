"use strict";
// Item class with title and price
var Item = /** @class */ (function () {
    function Item(itemName, price) {
        this.itemName = itemName;
        this.price = price;
    }
    Item.prototype.getItemName = function () {
        return this.itemName;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    return Item;
}());
// addCart function that grabs current session and pushes a new Item onto it
function addCart(item, price) {
    var newItem = new Item(item, price);
    var ss = sessionStorage.getItem('cart_array');
    if (ss == null) {
        ss = [];
        ss.push(newItem);
    }
    else {
        var cur_ss = JSON.parse(ss);
        cur_ss.push(newItem);
        ss = cur_ss;
    }
    // Store new budget array in session
    sessionStorage.setItem('cart_array', JSON.stringify(ss));
    updateCounter(ss.length.toString());
}
function updateCounter(count) {
    document.getElementById('cart-size').innerText = count;
}
