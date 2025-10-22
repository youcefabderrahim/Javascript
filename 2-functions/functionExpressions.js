// ! function expression() => a way to define functions as values or variables

// function hello () {
//     console.log("Hello!");
// }

const hello = function () {
    console.log("Hello!");
}
hello();


// 2- pass a function as a value
setTimeout(hello, 3000);