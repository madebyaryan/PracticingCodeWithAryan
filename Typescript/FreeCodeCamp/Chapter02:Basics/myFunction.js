"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("aryan"));
function signUpUser(name, email) {
    var isPaid = null;
    if (name == "john" && email == "aryan") {
        isPaid = true;
    }
    else {
        isPaid = false;
    }
    return isPaid;
}
console.log(signUpUser("appel", "aryan"));
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return name + email;
};
console.log(loginUser("h", "h@h.com"));
function getValue(val) {
    if (val > 5) {
        return val + 5;
    }
    return val;
}
console.log(getValue(10));
var getHello = function (s) {
    return "Hey Aryan!";
};
console.log(getHello("Mi"));
var heros = ["Scarlet Witch", "Black Widow", "Agatha"];
// const heros = [1, 2, 3];
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
function consoleError(errmsg) {
    return errmsg;
}
console.log(consoleError("Invalid"));
// The 'never' data type resembles the functionality of 'void', but 'never' is more so used to handle errors (so when you want to throw an execption or terminate the execution of the program).
function handleError(errmsg) {
    throw new Error(errmsg);
}
