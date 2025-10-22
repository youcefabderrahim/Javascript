// ! foreach() used to iterate over the elements of an array and apply a specefied
// function (claback) to rach element
// array.foreach(callback)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);  // we pass our funtion as a callback

function display(element) {
    console.log(element);
}

function double(element) {
    console.log(element * 2);
}