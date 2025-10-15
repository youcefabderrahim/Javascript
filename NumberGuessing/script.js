const MIN = 1;
const MAX = 10;
const answer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let attempts = 0;
let running = true;




document.getElementById("btn").onclick =function guess() {
    let userGuess = Number(document.getElementById("guess").value);
    console.log(typeof(userGuess));

    if (isNaN(userGuess)) {
        document.getElementById("msg").textContent = 
        "Please, enter a valid number";
    } else if (userGuess < MIN || userGuess > MAX) {
        document.getElementById("msg").textContent = 
        "Please, enter a valid number";
    } else {
        document.getElementById("msg").textContent = 
        "Guess a number between 1 & 10";
        attempts++;
        if (userGuess < answer) {
        document.getElementById("msg").textContent = 
        "Too low!";
            
        } else if (userGuess > answer) {
        document.getElementById("msg").textContent = 
        "Too high!";
        } else {
        document.getElementById("msg").textContent = 
        "Congrats! You won";
        // running = false;

        }

    }





}