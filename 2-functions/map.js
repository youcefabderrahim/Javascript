// ! .map() => accepts a callback and applies that function to each element
// ? of an array than returns a new array (very similar to foreach)
// ! it returns a new array without keeping the original one

const students = ['Jake', 'Alice', 'Amanda'];
const upperCased = students.map(upperCase);
console.log(upperCased);

const lowerCased = students.map(lowerCase);
console.log(lowerCased);

const capitalized = students.map(capitalize);
console.log(capitalized);


function upperCase (element) {
    return element.toUpperCase();
}

function lowerCase (element) {
    return element.toLowerCase();
}

function capitalize (element) {
    return element.charAt(0) + element.slice(1);
}