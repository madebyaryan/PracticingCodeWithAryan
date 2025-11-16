/* Create an interface for a Student with properties like id, name, age, grades (array of numbers), 
and an optional email. Write a function that accepts a Student object and calculates their average grade. 
Create at least three student objects that implement this interface. */

interface Student {
    id: number,
    name: string,
    age: number,
    grades: number[],
    email?: string
}

const studentOne: Student = { id: 1, name: "Aryan", age: 20, grades: [10, 10, 10] };
const studentTwo: Student = { id: 2, name: "Piet", age: 18, grades: [1, 5, 6] };
const studentThree: Student = { id: 3, name: "Rose", age: 21, grades: [8, 5, 6], email: "rose@gmail.com" };

function calcAvgGrade(student: Student): number {
    const total: number = student.grades.reduce((sum, grade) => sum + grade + 0)
    return Math.round(total / student.grades.length);
}

console.log(calcAvgGrade(studentOne));
console.log(calcAvgGrade(studentTwo));
console.log(calcAvgGrade(studentThree));
