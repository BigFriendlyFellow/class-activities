const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
let answer1 = arrOne.concat(arrTwo).concat("e");

// print the new, merged array
console.log(answer1);

// join the merged array and print the result
let answer2 = answer1.join(", ");
console.log(answer2);
