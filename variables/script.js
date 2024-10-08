// ways to declare variables
// var, let, const

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// Only letters, numbers, underscores, and dollar signs
// can't start with a number


// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase


// Re-assigning variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);


if(true){
    score = score + 1;
}
console.log(score);

const x = 100;
//x = 200; // exception --> constant declaration cannot be reassigned

//const score1; // compile error --> constant declaration should be intialized


const arr = [1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
const concatArr = arr.concat([6,7,8]);
console.log(concatArr);

// concat two arrays
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);


const person = {
    name: 'Brad'
}
console.log(person.name);
person.name = 'Hogg';
console.log(person.name);