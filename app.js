let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '00';
    previousInput = null;
    operator = null;
    updateDisplay();
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = '0';
    }
    updateDisplay();
}
