const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.indexOf("a"));
console.log(arr.indexOf("b"));
console.log(arr.indexOf("c"));

// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b"));
console.log(arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

// while (true) {
//   if (arr.indexOf("a") === arr.lastIndexOf("a")) {
//     console.log(arr);
//     console.log("task complete. :)");
//     break;
//   } else {
//     arr.splice(arr.lastIndexOf("a"), 1);
//   }
// }

function noDubs4U(arr, letter) {
  while (true) {
    if (arr.indexOf(letter) === arr.lastIndexOf(letter)) {
      console.log(arr);
      console.log(`Task ${letter} complete. Extra ${letter}'s are gone.'`);
      return;
    } else {
      arr.splice(arr.lastIndexOf(letter), 1);
    }
  }
}

noDubs4U(arr, "a");
noDubs4U(arr, "b");
noDubs4U(arr, "c");
