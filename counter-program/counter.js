// ! This a counter program

let number = 0;

document.getElementById(`count`).onclick = function count() {
    
    number++;
    document.getElementById(`display`).textContent = number;
}

document.getElementById(`discount`).onclick = function discount() {
    number--;
    document.getElementById(`display`).textContent = number;
}

document.getElementById(`reset`).onclick = function reset() {
    number = 0;
    document.getElementById(`display`).textContent = number;
}