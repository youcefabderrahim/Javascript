// ! .map() => accepts a callback and applies that function to each element
// ? of an array than returns a new array (very similar to foreach)
// ! it returns a new array without keeping the original one

const date = ["2025/10/22", "2026/03/04"];
const formattedDates = date.map(formatDates);
console.log(formattedDates);

function formatDates (element) {
    const parts = element.split("/");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}