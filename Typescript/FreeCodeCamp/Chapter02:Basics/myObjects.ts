const User = {
    name: "Aryan",
    email: "aryan@gmail.com",
    isActive: true
}

function creatUser({ name, isPaid }: { name: string, isPaid: boolean }) { return { name: "aryan", isPaid: false } }
let newUser = { name: "aryan", isPaid: false, email: "aryan@gmail.com" };
console.log(creatUser(newUser));

function createCourse(): { name: string, price: number } { return { name: "Aryan", price: 10 } }
console.log(createCourse());

type User = {
    name: string;
    email: string;
    isActive: boolean;
}
function makeUser(user: User): User {
    return { name: "aryan", "email": "aryan@gmail.com", isActive: false };
}
console.log(makeUser({ name: "aryan", "email": "aryan@gmail.com", isActive: false }));

type Person = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails: number;
}
let myPerson: Person = {
    _id: "1234",
    name: "Hitch",
    email: "hitch@gmail.com",
    isActive: false,
    credcardDetails: 12
}
myPerson.email = "H@gmail.com";
// myPerson._id = "12"

type cardNumber = {
    cardNumber: string;
}
type cardDate = {
    cardDate: string;
}
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

export { }