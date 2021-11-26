// create a new unordered list (ul) element
const newList = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").append(newList);

// create two new list item (li) elements, and add some text to them

// const newListText1 = document.createTextNode("I'm a tomato.");
// const newListText2 = document.createTextNode("No, I'm a tomato.");

const newListItem1 = document.createElement("li");
const newListItem2 = document.createElement("li");
// or
newListItem1.textContent = "Good morning.";
newListItem2.textContent = "Good night.";

// const newListText1 = document.createTextNode("I'm a tomato.");
// const newListText2 = document.createTextNode("No, I'm a tomato.");

// add the li elements to the ul in the nav-bar

// newList.appendChild(newListItem1).appendChild(newListText1);
// newList.appendChild(newListItem2).appendChild(newListText2);
//or
newList.appendChild(newListItem1);
newList.appendChild(newListItem2);
