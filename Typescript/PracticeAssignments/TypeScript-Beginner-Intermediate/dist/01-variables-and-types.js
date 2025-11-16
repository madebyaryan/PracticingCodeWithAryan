/* Create variables using let, const, and var to store a user's profile information including their name (string), age (number),
isActive (boolean), and accountBalance (number). Practice reassigning values where appropriate and observe the differences
between let, const, and var scoping. Try to reassign a const variable to see the error, and create variables inside different
scopes (like if statements or functions) to understand how let and var behave differently. Also experiment with type
inference by not explicitly declaring types and see how TypeScript automatically infers them. */
const me = { name: "Aryan", age: 20, isActive: true, accountBalance: 1000 };
function userProfile(person) {
    var profileName = person.name;
    let profileAge = person.age;
    const profileStatus = person.isActive;
    var profileBalance = person.accountBalance;
    if (profileName != "Aryan") {
        person.name = "Aryan";
        // "Var" has global scoping and can be redeclared - and updated freely
        profileName = "Aryan";
        console.log(person.name);
        return person;
    }
    if (profileAge != 20) {
        person.age = 20;
        // "Let" can be updated, but not redeclared - and is block scoped
        profileAge = 20;
        console.log(person.age);
        return person;
    }
    if (profileStatus != true) {
        person.isActive = true;
        // "Const" cannot be updated or redeclared - and is block-scoped only
        // profileStatus = true;
        console.log(person.isActive);
        return person;
    }
    if (profileBalance != 1000) {
        person.accountBalance = 1000;
        // "Var" has global scoping and can be redeclared - and updated freely
        profileBalance = 1000;
        console.log(person.accountBalance);
        return person;
    }
    return person;
}
userProfile(me);
export {};
//# sourceMappingURL=01-variables-and-types.js.map