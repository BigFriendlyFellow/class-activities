// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
// function joe(one, two) {
//   console.log(one);
//   console.log(two);
//   return one + two;
// }

// invoke the function and pass in two numbers
//joe(3, 4);

// invoke the function and pass in more than two numbers
//joe(3, 4, 5);

// invoke the function and pass in only one number
//joe(3); //not a number result

// change the function to set default values for the parameters
// function joe(one = 1, two = 2) {
//   console.log(one);
//   console.log(two);
//   return one + two;
// }

// again, invoke the function and pass in only one number
// joe(3);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function joe(one = 1, two = 2, ...three) {
  console.log(one);
  console.log(two);
  console.log(three);
  return one + two + three;
}

// again, invoke the function and pass in more than two numbers
joe(1, 3, 5, 7);
