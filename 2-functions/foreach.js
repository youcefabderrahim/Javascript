// ! foreach() used to iterate over the elements of an array and apply a specefied
// function (claback) to rach element
// array.foreach(callback)

let numbers = [1, 2, 3, 4, 5];


numbers.forEach(double);
numbers.forEach(display);  // we pass our funtion as a callback


numbers.forEach(square);
numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}