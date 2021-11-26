// print the outer HTML of the navigation bar
document.querySelector("nav > p").outerHTML;
console.log(document.querySelector("nav > p").outerHTML);

// print the inner HTML of the navigation bar
document.querySelector("nav > p").innerHTML;
console.log(document.querySelector("nav > p").innerHTML);

// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);

// select the classList for the first class-week, then add the class "week-1"
// const weekOne = document.querySelectorAll(".class-week");
// weekOne.classList.add("week 1");
document.querySelector(".class-week").classList.add("week-1");

// select the img element and add a src attribute
document.querySelector("#dog-picture");

// change the font color of the h1 element
document.querySelector("h1").style.color = "green";
