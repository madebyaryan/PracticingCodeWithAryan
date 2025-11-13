// Tuples in TS are basically arrays with at least two set types, that will always take on specific positions.
// For tUser you know that the tuple will always have a string at index[0], number at index[1] and bool at index[2]:
let tUser: [string, number, boolean];
tUser = ["Aryan", 20, true];

let rgb: [number, number, number] = [225, 244, 255];

type User = [number, string]
const newUser: User = [122, "Aryan"];
newUser[1] = "Mister";
// newUser.push(true);

export { }
