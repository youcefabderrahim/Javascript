// ! filter() => creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNums = numbers.filter(isOdd);
console.log(evenNums);

function isOdd (element) {
    return !(element % 2 === 0);
}