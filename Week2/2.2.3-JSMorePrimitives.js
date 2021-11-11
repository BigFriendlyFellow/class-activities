// create a variable "timeOfDay" and assign it a string
let timeOfDay = "morning";

// create a variable "greeting" that references a template literal
let greeting = `"Hello!"`;

// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
greeting = `Good ${timeOfDay}`;

// print "greeting"
console.log(greeting);

// create a new variable, but do not assign it a value
let newVar;

// print the variable and its type
console.log(newVar);
console.log(typeof newVar);
// ? what type should we expect?
//undefined

// assign the variable a value that indicates the variable is purposely blank
newVar = null;
// ? what value should we assign?
//null

// print the variable and its type again
console.log(newVar);
console.log(typeof newVar); //returns object
// ? what type should we expect?
//object;

// try to print a variable that does not exist
//console.log(goop);
// ? what should we expect to print in the CLI?
//error

// print "greeting" again
console.log(greeting);
// ? will this line run?
//yes
