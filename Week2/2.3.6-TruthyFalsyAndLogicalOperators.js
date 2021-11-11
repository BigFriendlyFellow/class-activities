// Logical Operators
// ? what do you expect each line to print?
console.log(true && false);
//false
console.log(true || false);
//true
console.log(!true);
//false
console.log(!(true && false));
//true
console.log(false || !false);
//true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?

//only a few non-boolean primitives that are falsy: 0, "" (any empty string), undefined, null, NaN
console.log("" && 0);
//falsy
console.log(undefined || null);
//falsy
console.log(!``);
//true
console.log(!(1 && "false"));
//false
console.log(NaN || !"true");
//false

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
let age;

if (age > 10) {
  console.log("full menu");
} else {
  console.log("kid's menu");
}

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;
// * your if statement here *

if (num && 1) {
  console.log("It's not zero my friend.");
} else {
  console.log("The number is zero.");
}
