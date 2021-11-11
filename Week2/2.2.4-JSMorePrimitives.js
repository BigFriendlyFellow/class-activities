// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let one = 1;
let two = "two";
let three = false;
let four = null;
let five = undefined;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof two);
console.log(typeof one);
console.log(typeof three);
console.log(typeof five);
console.log(typeof four);

// create a variable that references a template literal
// inside the template literal, use two variables
let six = `this one ${one} and this one ${two}.`;

// reassign the value of the variable that references "null"
four = "four";

// print the value and its type
console.log(four);
console.log(typeof four);

// print a variable that causes a ReferenceError
let butterbear = "your friend";
console.log(butterbear);

// alter the previous line to no longer cause a ReferenceError
//butterbear = "your friend";
