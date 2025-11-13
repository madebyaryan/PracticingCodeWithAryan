const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// You can take any value and return anything and everything (which is something we don't want)
function identityTwo(val) {
    return val;
}
// This differs from 'any'. With generics - once you for example assign a number, then the return type automatically becomes a number (you're locking the values)
function identityThree(val) {
    return val;
}
identityThree(3);
// You can even pass interfaces to generic functions:
function identityFour(val) {
    return val;
}
identityFour({ brand: "Heineken", type: 12 });
// Generic Arrays and Functions
function getSearchProducts(products) {
    const thisIndex = 1;
    if (products[thisIndex] === undefined) {
        throw new Error("Array Empty");
    }
    return products[thisIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 1;
    if (products[myIndex] === undefined) {
        throw new Error("Array Empty");
    }
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "Docker", username: "Aryan", password: "Appels" });
class Sellable {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
    }
}
export {};
//# sourceMappingURL=myGenerics.js.map