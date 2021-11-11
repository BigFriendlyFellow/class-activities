// create a variable outside of the while loop
// inside the while loop, we keep track of it and re-assign it until the condition becomes false
let x = 1;

// while x is less than or equal to 10,
while (x <= 10) {
  // print x
  console.log(x);

  // increment by one and re-assign x
  // if we forgot this step, x <= 10 always evaluates to true and we create an infinite loop
  x++;
}
