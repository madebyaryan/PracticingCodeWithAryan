/* Build a shopping cart system using arrays. Create an array of product names and an array of their prices.
Write functions to add items, remove items, calculate the total price, and find the most expensive item in the cart. */
const productNames = ["Apples", "Oranges", "Watermelon", "Guava", "Plums"];
const productPrices = [2, 4, 4, 5, 1];
function addItems(itemName) {
    productNames.push(itemName);
}
function removeItems(itemName) {
    const itemIndex = productNames.indexOf(itemName);
    if (itemIndex !== -1) {
        productNames.splice(itemIndex, 1);
    }
}
function totalPrice() {
    var total = 0;
    productPrices.forEach(item => total += item);
    return total;
}
function highestPrice() {
    let highestNum = 0;
    productPrices.forEach(item => {
        if (item > highestNum) {
            highestNum = item;
        }
    });
    return highestNum;
}
export {};
//# sourceMappingURL=02-array-operations.js.map