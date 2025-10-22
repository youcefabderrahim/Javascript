// ! foreach() used to iterate over the elements of an array and apply a specefied
// function (claback) to rach element
// array.foreach(callback)

let fruits = ['banana', 'apple', 'kiwi', 'fig'];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display (element) {
    console.log(element);
}