/* Create a function that accepts either a string or number as an ID parameter. 
Based on the type received, format it differently (strings should be uppercase, numbers should have leading zeros). 
Also create a union type for payment methods (CreditCard, PayPal, BankTransfer) and write a function to process payments.
Use type guards (typeof checks) to safely handle each type within your functions. 
Create a function that accepts multiple union types as parameters and returns different results based on the combination of types received. 
Practice using the pipe symbol (|) to create union types and understand when union types are more appropriate than using 'any'. */

function typeCheck(id: string | number): string | number {
    if (typeof (id) == "number") {
        return id.toString().padStart(2, "0");
    }
    if (typeof (id) == "string") {
        return id.toUpperCase();
    }
    return id;
}

type CreditCard = {
    name: string,
    CPC: number,
    validThrough: number,
}

type PayPal = {
    firstName: string,
    lastName: string,
    accountNumber: number,
}

type BankTransfer = {
    name: string,
    accountNumber: number,
    isValid: boolean
}

type paymentMethods = CreditCard | PayPal | BankTransfer
function processPayment(userSelection: paymentMethods): string {
    if ("CPC" in userSelection) {
        return `Processing credit card payment for ${userSelection.name}`;
    }
    if ("firstName" in userSelection) {
        return `Processing PayPal payment for ${userSelection.firstName} ${userSelection.lastName}`;
    }
    if ("isValid" in userSelection) {
        if (userSelection.isValid)
            return `Processing bank transfer for ${userSelection.name}`;
        return `Bank transfer invalid for ${userSelection.name}`;
    }
    return "Unknown payment method";
}

type Status = "pending" | "approved" | "rejected"
type Amount = number | string;

function processTransaction(payment: paymentMethods, status: Status, amount: Amount): string {
    let paymentType = "";

    if ("CPC" in payment) {
        paymentType = "CreditCard"
    }
    else if ("firstName" in payment) {
        paymentType = "PayPal"
    }
    else {
        paymentType = "BankTransfer"
    }

    const formattedAmount = typeof amount === "number" ? `€${amount.toFixed(2)}` : amount;

    return `${paymentType} transaction of ${formattedAmount} is ${status}`;
}
