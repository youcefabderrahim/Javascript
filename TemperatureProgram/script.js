let isCelc = true;
let input;



// ! This is how we get the radios values
let radios = document.querySelectorAll('input[name="temp"]');

// ! Key values learned
// Everything happens when we click the button
//  Nothing happens untill the user does somethins
//  !This function does (get input → get choice → calculate → show result)
// ! when clicked, that's still one thing that it does

// function getValue () {
//     // Loop through all of them
//     for (let i = 0; i < radios.length; i++) {
//     radios[i].addEventListener('change', function() {
//         // 'this' refers to the radio button that was changed
//         console.log("You selected: " + this.value);
//         console.log(typeof this.value)
//     });
//     }

// }





document.getElementById(`convert`).onclick = function convert () {

    // ! Get the value of the selected radio 
    let selectedRadio =  document.querySelector('input[name="temp"]:checked');
    let choice = selectedRadio.value;
    console.log(choice);
    input = document.getElementById(`tempValue`).value;
    console.log(input);
    console.log(`The button works`);
    if (choice === "F") {
        document.getElementById(`result`).textContent = (Number(input) * (9/5)) + 32;
        console.log((Number(input) * (9/5)) + 32);


    } else if (choice === "C") {
        document.getElementById(`result`).textContent = (Number(input) - 32) * (5/9);
        console.log((Number(input) - 32) * (5/9));
    }


}

