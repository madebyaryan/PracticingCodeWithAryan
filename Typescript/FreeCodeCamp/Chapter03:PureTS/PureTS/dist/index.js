// Classes and Access Modifiers in TS:
class Human {
    email;
    name;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const person = new Human("arya@gmail.com", "aryan");
// person.city = "Rotterdam";
// Alternative Class Definition + Getters and Setters:
class HumanAlternative {
    email;
    name;
    // Private variables can only be used in the same class (scope).
    _courseCount = 1;
    // Protected variables can be used in the same class aswell as any classes that inherit the class.
    _courseId = 1;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    // Private Methods:
    deleteToken() {
        console.log("Token Deleted");
    }
    // Getters:
    get getAppleEmail() {
        return `Apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // Setters can never have a return type annotation
    // These following declarations can never happen:
    // set courseCount(coursenumber) : void {
    // }
    // set courseCount(coursenumber) : number {
    // }
    // set courseCount(coursenumber) : string {
    // }
    set courseCount(coursenumber) {
        if (coursenumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = coursenumber;
    }
}
// Child Classes (Inheritance) => can inherit everything BUT private properties or functions
class SubHumanAlt extends HumanAlternative {
    isFamily = true;
    changeCourseCount() {
        this._courseId = 4;
    }
}
const personAlt = new HumanAlternative("arya@gmail.com", "aryan");
export {};
//# sourceMappingURL=index.js.map