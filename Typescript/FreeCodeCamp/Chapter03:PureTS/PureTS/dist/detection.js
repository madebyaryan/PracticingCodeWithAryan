// Type Narrowing:
// use typeof to use as a "Type Guard" - which gives basic info about the type of values we have at runtime.
// So checking AGAINST the value returned by `typeof` is what's called a type guard in TS.
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        return "Please provide ID";
    }
    id.toLowerCase();
}
// We don't like this way of type guarding in business cases - because you can still get an empty string through the function!
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s in strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string")
            console.log(strs);
    }
}
function isAdminAccount(person) {
    if ("isAdmin" in person) {
        return person.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // TypeScript now knows pet is Fish here
        return "fish food";
    }
    else {
        pet; // TypeScript now knows pet is Bird here
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius;
    }
    if (shape.kind === "square") {
        return shape.side * shape.side;
    }
    if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
}
// Exhaustiveness Checking (precautionary check - making sure your code is future proof):
// This technique uses the "never" type to ensure you've handled all possible cases in a union type.
// If you add a new shape to the Shape union but forget to handle it in the switch, TypeScript will throw a compile error.
// The never type can only be assigned if there are truly no possible values left, so if any case is unhandled, the default case will cause a type error, forcing you to add the missing case.
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
export {};
//# sourceMappingURL=detection.js.map