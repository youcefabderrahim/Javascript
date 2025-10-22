// ! .reduce() => reduces the elements of an array to a single value

const prices = [39, 1, 3, 10, 25];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);


function sum (accumulator, element) {
    return accumulator + element;
}