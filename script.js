
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}