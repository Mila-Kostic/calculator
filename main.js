//alert("Happy codding!");
const button = document.getElementsByClassName("button");
console.log(button);

const p_tag = document.getElementsByTagName("p");
console.log(p_tag);

/*Select elements by using CSS Selectors*/

const img = document.querySelector("img"); // select element by tag name
const input = document.querySelector("input[type='text']");
last_div = document.querySelector("form > *:last-child");
const button = document.querySelector(".btn"); //select element by class name
const button = document.querrySelector("#btn"); //select element by id
