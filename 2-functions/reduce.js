// ! .reduce() => reduces the elements of an array to a single value

let grades = [76, 77, 90, 82, 95];
const maxGrade = grades.reduce(getMax);
console.log(maxGrade);

const minGrade = grades.reduce(getMin);
console.log(minGrade);


function getMax (accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin (accumulator, element) {
    return Math.min(accumulator, element);
}