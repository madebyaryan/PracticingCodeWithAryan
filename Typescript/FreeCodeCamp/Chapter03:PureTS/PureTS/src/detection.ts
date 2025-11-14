// Type Narrowing:
// use typeof to use as a "Type Guard" - which gives basic info about the type of values we have at runtime.
// So checking AGAINST the value returned by `typeof` is what's called a type guard in TS.
function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        return "Please provide ID";
    }
    id.toLowerCase();
}

// We don't like this way of type guarding in business cases - because you can still get an empty string through the function!
function printAll(strs: string | string[] | null) {
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

// To narrow down potential types you could also just use the operator `in`
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string
    isAdmin: boolean
}

function isAdminAccount(person: User | Admin) {
    if ("isAdmin" in person) {
        return person.isAdmin;
    }
}

// Type narrowing is the process of refining a value from a broader type (like a union) to a more specific type.
// This allows TypeScript to provide better autocomplete, catch more errors at compile-time, and make your code safer.
// Without type narrowing, TypeScript would force you to handle all possible types in a union at once, making your code less precise.

// The `typeof` operator is best used for primitive types (string, number, boolean, symbol, undefined, function).
// However, `typeof` has limitations - it returns "object" for arrays, null, and objects, so it's not always precise enough.
// That's why for arrays you might need additional checks like Array.isArray(), and for null you need explicit null checks.

// The `in` operator checks if a property exists in an object, making it perfect for discriminating between interface types.
// When you use "propertyName" in object, TypeScript intelligently narrows the type based on which interface contains that property.
// This is especially useful when dealing with union types of interfaces that have different properties, like User vs Admin above.

// Type guards (typeof, in, instanceof, custom type predicates) are essential tools in TypeScript for writing type-safe code.
// They tell TypeScript's compiler "inside this if block, I've confirmed the type is X", allowing you to safely access type-specific properties and methods.
// Without type guards, you'd either have to use type assertions (which bypass safety) or handle all possible cases simultaneously (which is impractical).

// Type Predicates (allow for more direct control over how types change throughout your code):
// Type predicates are custom type guards that use the "parameterName is Type" syntax in the return type.
// Unlike regular boolean-returning functions, type predicates tell TypeScript "if this returns true, the parameter IS definitely this type".
// This is more powerful than typeof or in operators because you can write complex custom logic to determine the type, giving you full control over type narrowing.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet // TypeScript now knows pet is Fish here
        return "fish food"
    }
    else {
        pet // TypeScript now knows pet is Bird here
        return "bird food"
    }
}

// Discriminated Unions (also called "tagged unions"):
// This pattern uses a common literal property (like "kind") across multiple types to help TypeScript distinguish between them.
// Each type in the union has the same property name but with a unique literal value, making it easy to narrow types with simple equality checks.
// This is one of the most powerful and common patterns in TypeScript for modeling complex data structures in a type-safe way.
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
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
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}

