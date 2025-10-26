// I- Add an element to the page
// There are two ways to add elements to the page
// 1- select the element you want to change, or to append elements to, speaking of append
// append vs appendChild, with appendchild you can only append elements such as div, and other tags
// with append you can append all of those with string any pretty much anything
const body = document.body;
body.append(`Hello`);

// ! II- Create an element and then you have to add it
const div = document.createElement('div');
body.append(div);

// ! there are two way to add a text to a div
div.innerText = "This is a DOM manipulation"
div.textContent = "This is a DOM manipulation 2"