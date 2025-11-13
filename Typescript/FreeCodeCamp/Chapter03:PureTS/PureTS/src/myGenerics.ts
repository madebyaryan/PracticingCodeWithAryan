const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

// You can take any value and return anything and everything (which is something we don't want)
function identityTwo(val: any): any {
    return val;
}

// This differs from 'any'. With generics - once you for example assign a number, then the return type automatically becomes a number (you're locking the values)
function identityThree<Type>(val: Type): Type {
    return val;
}
identityThree(3);

// You can even pass interfaces to generic functions:
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string
    type: number
}
identityFour<Bottle>({ brand: "Heineken", type: 12 })

// Generic Arrays and Functions
function getSearchProducts<T>(products: T[]): T {
    const thisIndex = 1;
    if (products[thisIndex] === undefined) {
        throw new Error("Array Empty");
    }
    return products[thisIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 1;
    if (products[myIndex] === undefined) {
        throw new Error("Array Empty");
    }
    return products[myIndex];
}

// Using 'extends' with generics:
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3, { connection: "Docker", username: "Aryan", password: "Appels" });

// Generic classes:
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }
}
