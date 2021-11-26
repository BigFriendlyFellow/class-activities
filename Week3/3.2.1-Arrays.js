// create an Array using an Array literal
const turtles = ["mike", "leo", "don", "ralph"];

// access the 1st item in the Array
turtles[0];

// access the last item in the Array
turtles[turtles.length - 1];

// print the length of the Array
console.log(turtles.length);

// use the length property to access the last item in the Array
turtles[turtles.length - 1];

// with for...of, loop over the Array, modify the value and add to a different Array
const rats = [];
let i = 0;
for (let tut of turtles) {
  rats[i] = tut + " doop";
  console.log(rats[i]);
  i++;
}
