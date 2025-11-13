function addTwo(num: number): number {
    return num + 2;
}
console.log(addTwo(5));

function getUpper(val: string) {
    return val.toUpperCase()
}
console.log(getUpper("aryan"));

function signUpUser(name: string, email: string) {
    let isPaid = null;
    if (name == "john" && email == "aryan") {
        isPaid = true;
    }
    else {
        isPaid = false;
    }
    return isPaid;
}
console.log(signUpUser("appel", "aryan"));

let loginUser = (name: string, email: string, isPaid: boolean = false) => { return name + email };
console.log(loginUser("h", "h@h.com"))

function getValue(val: number): number {
    if (val > 5) {
        return val + 5
    }
    return val;
}
console.log(getValue(10))

const getHello = (s: string): string => {
    return "Hey Aryan!"
}
console.log(getHello("Mi"));

const heros = ["Scarlet Witch", "Black Widow", "Agatha"];
// const heros = [1, 2, 3];
console.log(heros.map((hero): string => {
    return `hero is ${hero}`
}))

function consoleError(errmsg: string): string {
    return errmsg;
}
console.log(consoleError("Invalid"))

// The 'never' data type resembles the functionality of 'void', but 'never' is more so used to handle errors (so when you want to throw an execption or terminate the execution of the program).
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }