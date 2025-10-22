// ! .map() => accepts a callback and applies that function to each element
// ? of an array than returns a new array (very similar to foreach)

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares);

const cubes = numbers.map(cube);
console.log(cubes);


function square (element) {
    return Math.pow(element, 2);
}

function cube (element) {
    return Math.pow(element, 3);
}