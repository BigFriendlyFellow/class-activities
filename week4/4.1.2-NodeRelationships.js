// select the root node
const root = document.getElementsByTagName("html");
console.log(document.getElementsByTagName("html"));

// select the last child of the root node
document.getElementsByTagName("html").lastElementChild;
document.querySelector("html").lastElementChild;
console.log(document.querySelector("html").lastElementChild);

// select all the children of the body element
document.querySelector("body").children;
console.log(document.querySelector("body").children);

// select the next sibling of the h2 node
document.querySelector("h2").nextElementSibling;
console.log(document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
document.querySelector("h1").parentElement;
