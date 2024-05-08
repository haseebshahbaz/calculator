var display = document.getElementById("display");

function appenToDisplay(input) {
    display.value += input;
}


function clearDisplay(index) {
    display.value = "";
}


function calculate(index) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}