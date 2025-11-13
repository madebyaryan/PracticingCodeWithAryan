let score: number | string = 33
score = "appels"
console.log(score);
score = 45
console.log(score);

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}
let Aryan: User | Admin = { name: "aryan", id: 22 }
Aryan = { username: "rick", id: 23 }

getDbId(1);
getDbId("1");
function getDbId(id: number | string) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    console.log(`DB id is: ${id}`);
}

// Array - You cant't mixmatch different types of arrays in TS using union without using parenthesis
const dataNum: number[] = [1, 2, 3, 4];
const dataString: string[] = ["1", "2", "3", "4"];
// const data: string[] | number[] = [1, 2, 3, "4"];
const data: (string | number)[] = [1, 2, 3, "4"];

// Strict typing in TS:
let pi: 3.14 = 3.14;
// pi = 3.12;

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew";



export { }
