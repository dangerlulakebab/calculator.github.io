let clearTimer;
let pressTime;


const display = document.getElementById('display');
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error  💀';
    }
}








function clearDisplay() {
    clearTimeout(clearTimer);
    
    // Add a class to animate the button
    display.classList.add('holding');

    // Wait for the animation to finish
    clearTimer = setTimeout(() => {
        display.value = '';
        // Remove the animation class
        display.classList.remove('holding');
    }, 120); // 120 milliseconds = 0.12 second i made that cuz the animation is like .3 so while the glowing animtion will raech the input it will just disspaear in timing yo))
}