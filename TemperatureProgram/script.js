// ! 1- we have to declare all DOM functions as consts first
const tempValue = document.getElementById(`tempValue`);
const toC = document.getElementById(`toC`);
const toF = document.getElementById(`toF`);
const result = document.getElementById(`result`);
const btn = document.getElementById(`convert`);
let temp;

btn.onclick = function convert () {
        if (toF.checked) {
        // Convert from Celsius to Fahrenheit
        temp = Number(tempValue.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
        } else if (toC.checked) {
        // Convert from Fahrenheit to Celsius
        temp = Number(tempValue.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
        } else {
        result.textContent = "Please, choose a unit!";

    }
}


// ! Key lessons
// 1- Declaring DOM references as const at the top — good for readability and performance.
// 2- Using Number() to ensure numeric conversion (avoids string issues).
// 3- Using toFixed(1) for clean rounding — perfect for user display.
// 4- Writing a clear fallback message (Please, choose a unit!).