// Main diff between Types and Interfaces is that Interfaces allow you to define functions aswell.
interface intUser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: number
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// You get to "reopen" interfaces and add more values to it:
interface intUser {
    githubToken: string
}

// Inheritance in Interfaces (give all props from intUser to Admin):
interface Admin extends intUser {
    role: "Admin" | "Learner" | "Teacher"
}

const Aryan: Admin = {
    role: "Admin",
    dbId: 12,
    githubToken: "ahsi9wjsl",
    email: "aryan@gmail.com",
    userId: 1,
    googleId: 239182,
    startTrial: () => {
        return "string"
    },
    getCoupon: (name: "aryan10", number: 10) => {
        return number;
    }
}

