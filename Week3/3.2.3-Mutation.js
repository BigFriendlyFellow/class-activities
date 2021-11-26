let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = 1;

// using DOT NOTATION, assign a PROPERTY to c
c.a = 2; //dot notation is a string
console.log("c after mutation ", c);

// using DOT NOTATION, assign a METHOD to c
//c.greet = alert("Good Evening!");
c.greet = () => `Hello!`;

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());
console.log(c.greet());

// print a, b, and c
