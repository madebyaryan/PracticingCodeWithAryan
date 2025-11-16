/* Build a simple calculator with functions for add, subtract, multiply, and divide.
Each function should take two numbers as parameters and return the result.
Add proper type annotations for parameters and return types. Include a function that uses optional parameters for rounding the result.
Create a function with default parameter values for situations where only one number is provided.
Add error handling for division by zero and include a function that takes a rest parameter to perform operations on multiple numbers at once,
demonstrating different function syntax options. */
class Calculator {
    shouldRound;
    constructor(shouldRound = false) {
        this.shouldRound = shouldRound;
    }
    applyRound(result) {
        return this.shouldRound ? Math.round(result) : result;
    }
    add(...nums) {
        if (nums.length === 0)
            return 0;
        const results = nums.reduce((sum, num) => sum + num, 0);
        return this.applyRound(results);
    }
    substract(...nums) {
        if (nums.length === 0)
            return 0;
        const results = nums.reduce((diff, num) => diff - num);
        return this.applyRound(results);
    }
    multiply(...nums) {
        if (nums.length === 0)
            return 0;
        const results = nums.reduce((product, num) => product * num);
        return this.applyRound(results);
    }
    divide(num1, num2 = 1) {
        if (num2 === 0) {
            throw new Error("Numbers cannot be divided by zero!");
        }
        const results = num1 / num2;
        return this.applyRound(results);
    }
}
const calc = new Calculator(true);
console.log(calc.add(1, 2, 3, 4));
console.log(calc.substract(7, 3));
console.log(calc.multiply(4, 10, 2));
console.log(calc.divide(6, 2));
export {};
//# sourceMappingURL=04-function-calculator.js.map